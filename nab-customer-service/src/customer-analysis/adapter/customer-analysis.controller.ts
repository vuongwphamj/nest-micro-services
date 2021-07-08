import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { Response } from 'nab-core-service/dist';
import { CustomerAnalysisService } from '../core/customer-analysis.service';
import { GetCustomerPromotionsDto } from '../core/dtos/get-customer-promotions.dto';
import { GetCustomerPromotionsResponse } from '../core/res/get-customer-promotions.response';

@Controller()
export class CustomerAnalysisController {
    constructor(private readonly customerAnalysisService: CustomerAnalysisService) {}

    @GrpcMethod('CustomerAnalysisService', 'GetPromotions')
    async getPromotions(
        data: GetCustomerPromotionsDto,
        metadata: Metadata,
        call: ServerUnaryCall<any>,
    ): Promise<Response<any>> {
        try {
            const result = await this.customerAnalysisService.getPromotions(data);

            return Response.ok<GetCustomerPromotionsResponse>(result);
        } catch (error) {
            return Response.error(error.message);
        }
    }
}
