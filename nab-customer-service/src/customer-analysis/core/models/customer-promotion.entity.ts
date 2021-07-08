import { Entity } from 'nab-core-service/dist';
import { Entity as ORMEntity, Column, JoinColumn, OneToOne } from 'typeorm';
import { Promotion } from './promotion.entity';

@ORMEntity({ name: 'CustomerPromotions' })
export class CustomerPromotion extends Entity {
    @Column('varchar', { length: 50, nullable: false })
    customerId: string;

    @OneToOne((type) => Promotion, (promotion) => promotion.id)
    @JoinColumn({ name: 'promotionId' })
    @Column('varchar', { nullable: false })
    promotionId: string;
}
