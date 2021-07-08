import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AuthUser, User } from 'nab-core-service/dist';
import { ProductService } from '../core/product.service';
import { SearchProductDto } from '../core/dtos/search-product.dto';

@Controller('/products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('/search')
    async search(@Body() body: SearchProductDto, @AuthUser() authUser: User) {
        return this.productService.search(body, authUser);
    }

    @Get('/:productId')
    async findOne(@Param('productId') productId, @AuthUser() authUser: User) {
        return this.productService.findOne(productId, authUser);
    }

    @Post('')
    async create() {
        throw new Error('Need Implement!');
    }

    @Put('')
    async update() {
        throw new Error('Need Implement!');
    }
}
