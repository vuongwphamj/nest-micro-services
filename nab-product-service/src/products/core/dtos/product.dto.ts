import { IsOptional } from 'class-validator';

export class ProductDto {
    @IsOptional()
    id: string;
    @IsOptional()
    orderBy: string;
    @IsOptional()
    orderType: string;

    constructor(data: Partial<ProductDto>) {
        Object.assign(this, data);
    }
}
