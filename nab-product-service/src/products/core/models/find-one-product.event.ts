import { User } from 'nab-core-service/dist';
import { ProductEvent } from './product.event.entity';

export class FindOneProductEvent extends ProductEvent {
    getName() {
        return FindOneProductEvent.name;
    }

    static create(data: any, user?: User) {
        return new FindOneProductEvent({
            id: data.id,
            payload: JSON.stringify(data.payload),
            createdBy: user.id,
        });
    }
}
