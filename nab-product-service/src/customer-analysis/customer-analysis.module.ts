import { CUSTOMER_ANALYSIS_PACKAGE } from '../config/cutomer-analysis.option';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { CustomerAnalysisServiceClientOptions } from 'src/config/cutomer-analysis.option';
import { CustomerAnalysisClient } from './customer-analysis.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: CUSTOMER_ANALYSIS_PACKAGE,
                ...CustomerAnalysisServiceClientOptions,
            },
        ]),
    ],
    controllers: [CustomerAnalysisClient],
})
export class CustomerModule {}
