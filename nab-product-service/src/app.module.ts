import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseConfig } from './config';
import { CustomerModule } from './customer-analysis/customer-analysis.module';
import { ProductModule } from './products/product.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(DatabaseConfig),
        ProductModule,
        ConfigModule.forRoot({
            expandVariables: true,
            envFilePath: '.env',
        }),
        CustomerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
