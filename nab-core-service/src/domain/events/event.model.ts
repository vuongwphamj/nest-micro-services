import { Column, PrimaryColumn } from 'typeorm';
import { generateUUID } from '../../utils';

export class Event {
    @Column('varchar', { length: 50, nullable: false })
    @PrimaryColumn()
    id: string;

    @Column('varchar', { length: 255, nullable: false })
    name: string;

    @Column('varchar', { length: 255, nullable: false })
    type: string;

    @Column('varchar', { length: 500, nullable: true })
    payload: string;

    @Column('varchar', { length: 50, nullable: false })
    createdBy: string;

    @Column('datetime', { nullable: false })
    createdAt: Date;

    constructor(data?: Partial<Event>) {
        Object.assign(this, data);
        this.id = this.id || generateUUID();
        this.name = this.getName();
        this.type = this.getType();
        this.createdAt = this.createdAt ? this.createdAt : new Date();
    }

    getName() {
        return Event.name;
    }

    getType() {
        return Event.name;
    }
}
