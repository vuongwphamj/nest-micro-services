import { Event } from 'nab-core-service/dist';
import { Entity as ORMEntity } from 'typeorm';

@ORMEntity({ name: 'ProductEvents' })
export class ProductEvent extends Event {
    getType() {
        return ProductEvent.name;
    }
}
