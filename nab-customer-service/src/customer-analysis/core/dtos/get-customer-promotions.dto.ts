import { IsOptional } from 'class-validator';

export class GetCustomerPromotionsDto {
    @IsOptional()
    customerId: string;
    @IsOptional()
    productId: string;
    @IsOptional()
    requestId: string;

    constructor(data: Partial<GetCustomerPromotionsDto>) {
        Object.assign(this, data);
    }
}
