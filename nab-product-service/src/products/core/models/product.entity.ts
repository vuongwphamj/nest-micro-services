import { Entity } from 'nab-core-service/dist';
import { Entity as ORMEntity, Column } from 'typeorm';
import { Promotion } from './promotion';

export const enum ProductStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

@ORMEntity({ name: 'Products' })
export class Product extends Entity {
    @Column('varchar', { length: 255, nullable: false })
    name: string;

    @Column('varchar', { length: 50, nullable: false })
    catId: string;

    @Column('varchar', { length: 255, nullable: false })
    status: ProductStatus;

    @Column("decimal", { precision: 15, scale: 2, default: 0, nullable: true })
    price: number;

    @Column("decimal", { precision: 15, scale: 2, default: 0, nullable: true })
    discountPrice: number;

    @Column("bigint", { default: 0, nullable: true })
    quanity: number;

    @Column('varchar', { length: 50, nullable: true })
    brand: string;

    @Column('varchar', { length: 50, nullable: true })
    color: string;

    @Column('varchar', { length: 50, nullable: true })
    size: string;

    @Column('varchar', { length: 50, nullable: true })
    width: string;

    @Column('varchar', { length: 50, nullable: true })
    height: string;

    @Column('varchar', { length: 50, nullable: true })
    original: string;

    @Column('varchar', { length: 500, nullable: true })
    description: string;

    promotions: Promotion[] = [];

    constructor(data?: Partial<Product>) {
        super(data);
        Object.assign(this, data);
    }

    setPromotions(promotions: Promotion[]) {
        this.promotions = promotions;
    }
}
