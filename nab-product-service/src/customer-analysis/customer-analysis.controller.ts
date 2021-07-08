import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CUSTOMER_ANALYSIS_PACKAGE } from '../config/cutomer-analysis.option';
interface CustomerAnalysisService {
    findOne(data: any): Observable<any>;
}

@Controller()
export class CustomerAnalysisClient implements OnModuleInit {
    private customerService: any;

    constructor(@Inject(CUSTOMER_ANALYSIS_PACKAGE) private readonly client: ClientGrpc) {}

    onModuleInit() {
        this.customerService =
            this.client.getService<CustomerAnalysisService>('CustomerAnalysisService');
    }

    async getPromotions(data): Promise<any> {
        const res = await this.customerService.getPromotions(data).toPromise();
        if (res.statusCode === 200) {
            return res.data.promotions;
        }
        return [];
    }
}
