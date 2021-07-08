import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config';

import { CustomerAnalysisModule } from './customer-analysis/customer-analysis.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(DatabaseConfig),
        CustomerAnalysisModule,
        ConfigModule.forRoot({
            expandVariables: true,
            envFilePath: '.env',
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
