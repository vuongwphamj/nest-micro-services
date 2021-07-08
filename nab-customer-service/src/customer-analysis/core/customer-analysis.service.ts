import { Injectable, Logger } from '@nestjs/common';
import { User } from 'nab-core-service/dist';

import { CustomerPromotion } from './models/customer-promotion.entity';
import { GetCustomerPromotionsDto } from './dtos/get-customer-promotions.dto';
import { GetCustomerPromotionsResponse } from './res/get-customer-promotions.response';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Promotion } from './models/promotion.entity';

@Injectable()
export class CustomerAnalysisService {
    private readonly logger = new Logger(CustomerAnalysisService.name);

    constructor(
        @InjectRepository(CustomerPromotion)
        private readonly customerPromotionRepository: Repository<CustomerPromotion>,
    ) { }

    async getPromotions(data: GetCustomerPromotionsDto): Promise<GetCustomerPromotionsResponse> {
        this.logger.debug(`Received a request ${data.requestId}: ${JSON.stringify(data)}`);
        // 1. get analytics promotion data

        let cusPromotions = [];
        if (data.customerId !== User.ANOMYOUS_ID) {
            cusPromotions = await this.customerPromotionRepository.find({
                relations: ["promotionId"],
                where: {
                    customerId: data.customerId,
                },
            });
        }

        const promotions = cusPromotions.map((cusPromotion) => {
            return new Promotion({
                ...cusPromotion.promotionId,
            })
        })

        return new GetCustomerPromotionsResponse({
            customerId: data.customerId,
            productId: data.productId,
            promotions,
        });
    }
}
