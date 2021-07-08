import { Entity } from 'nab-core-service/dist';
import { Entity as ORMEntity, Column } from 'typeorm';

@ORMEntity({ name: 'Promotions' })
export class Promotion extends Entity {
    @Column('varchar', { length: 255, nullable: false })
    name: string;
    @Column('varchar', { length: 500, nullable: true })
    desciption: string;
}
