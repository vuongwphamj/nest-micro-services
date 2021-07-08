import { Column, PrimaryColumn } from 'typeorm';

export class Entity {
    @Column('varchar', { length: 50, nullable: false })
    @PrimaryColumn()
    id: string;

    @Column('varchar', { length: 50, nullable: false })
    createdBy: string;

    @Column('varchar', { length: 50, nullable: false })
    updatedBy: string;

    @Column('datetime', { nullable: false })
    createdAt: Date;

    @Column('datetime', { nullable: false })
    updatedAt: Date;

    @Column('tinyint', { nullable: false })
    deleted: boolean;

    constructor(data: Partial<Entity>) {
        Object.assign(this, data);
    }
}
