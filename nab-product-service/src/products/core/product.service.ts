import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

import { generateUUID, User, NotFoundRequest } from 'nab-core-service/dist';
import { SearchProductDto } from '../core/dtos/search-product.dto';
import { Product } from './models/product.entity';
import { SearchProductEvent } from './models/search-product.event';
import { FindOneProductEvent } from './models/find-one-product.event';
import { ProductEvent } from './models/product.event.entity';
import { CustomerAnalysisClient } from 'src/customer-analysis/customer-analysis.controller';
import { Promotion } from './models/promotion';

@Injectable()
export class ProductService {
    private readonly logger = new Logger(ProductService.name);

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(ProductEvent)
        private readonly productEventRepository: Repository<ProductEvent>,
        @Inject(CustomerAnalysisClient)
        private readonly cutomerClient: CustomerAnalysisClient,
    ) {}

    async search(data: SearchProductDto, authUser?: User): Promise<Product[]> {
        const requestId = generateUUID();
        this.logger.debug(`Received a request ${requestId}: ${JSON.stringify(data)}`);
        const products = await this.productRepository.find({
            where: [{ name: data.name ? Like(`%${data.name}%`) : undefined }],
            order: data.orderBy? { [data.orderBy]: data.orderType } : undefined,
            take: data.limit || 1,
            skip: data.page > 0 ? data.page : 0,
        } as any);

        const event = SearchProductEvent.create(
            {
                id: requestId,
                payload: data,
            },
            authUser,
        );
        this.logger.debug(`Event: ${JSON.stringify(event)}`);
        await this.productEventRepository.save(event);

        return products;
    }

    async findOne(productId: string, authUser?: User): Promise<Product> {
        const requestId = generateUUID();
        this.logger.debug(`Received a request ${requestId}: ${JSON.stringify({ productId })}`);

        const product = await this.productRepository.findOne(productId);

        if (!product) {
            throw new NotFoundRequest('Product is not exist');
        }

        const customerPromotion = await this.cutomerClient.getPromotions({
            customerId: authUser.id,
            productId: productId,
            requestId,
        });

        product.setPromotions(customerPromotion as Promotion[]);

        const event = FindOneProductEvent.create(
            {
                id: requestId,
                payload: { productId },
            },
            authUser,
        );
        this.logger.debug(`Event: ${JSON.stringify(event)}`);
        await this.productEventRepository.save(event);

        return product;
    }
}
