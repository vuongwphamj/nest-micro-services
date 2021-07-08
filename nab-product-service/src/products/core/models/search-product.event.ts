import { User } from 'nab-core-service/dist';
import { ProductEvent } from './product.event.entity';

export class SearchProductEvent extends ProductEvent {
    getName() {
        return SearchProductEvent.name;
    }

    static create(data: any, user?: User) {
        return new SearchProductEvent({
            id: data.id,
            payload: JSON.stringify(data.payload),
            createdBy: user.id,
        });
    }
}
