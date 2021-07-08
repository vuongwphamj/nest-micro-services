import { ANOMYOUS_USER_ID } from './../../const';

export class User {
    id: string;
    name: string;
    sex: boolean;

    constructor(data?: Partial<User>) {
        Object.assign(this, data);
    }

    static ANOMYOUS_ID = ANOMYOUS_USER_ID;

    static createAnonymousUser() {
        return new User({
            id: ANOMYOUS_USER_ID,
            name: 'Anonymous',
        });
    }

    isAnonymousUser() {
        return this.id === ANOMYOUS_USER_ID;
    }
}
