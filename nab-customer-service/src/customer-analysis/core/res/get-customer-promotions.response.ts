import { Promotion } from '../models/promotion.entity';

export class GetCustomerPromotionsResponse {
    customerId: string;
    productId: string;
    promotions: Promotion[];

    constructor(data?: Partial<GetCustomerPromotionsResponse>) {
        Object.assign(this, data);
    }
}
