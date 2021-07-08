import { CustomerAnalysisClient } from './../customer-analysis/customer-analysis.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerModule } from './../customer-analysis/customer-analysis.module';

import { ProductController } from './adapter/product.controller';
import { Product } from './core/models/product.entity';
import { ProductEvent } from './core/models/product.event.entity';
import { ProductService } from './core/product.service';

import { ClientsModule } from '@nestjs/microservices';
import {
    CUSTOMER_ANALYSIS_PACKAGE,
    CustomerAnalysisServiceClientOptions,
} from 'src/config/cutomer-analysis.option';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product, ProductEvent]),
        CustomerModule,
        ClientsModule.register([
            {
                name: CUSTOMER_ANALYSIS_PACKAGE,
                ...CustomerAnalysisServiceClientOptions,
            },
        ]),
    ],
    controllers: [ProductController],
    providers: [ProductService, CustomerAnalysisClient],
})
export class ProductModule {}
