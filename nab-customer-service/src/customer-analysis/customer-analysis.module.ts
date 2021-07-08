import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerAnalysisController } from './adapter/customer-analysis.controller';
import { CustomerAnalysisService } from './core/customer-analysis.service';
import { CustomerPromotion } from './core/models/customer-promotion.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CustomerPromotion])],
    controllers: [CustomerAnalysisController],
    providers: [CustomerAnalysisService],
})
export class CustomerAnalysisModule {}
