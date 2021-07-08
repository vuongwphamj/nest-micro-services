import { IsOptional } from 'class-validator';
import { PaginationDto } from 'nab-core-service/dist';

export class SearchProductDto extends PaginationDto {
    @IsOptional()
    name: string;
    @IsOptional()
    orderBy: string;
    @IsOptional()
    orderType: string;

    constructor(data: Partial<SearchProductDto>) {
        super();
        Object.assign(this, data);
    }
}
