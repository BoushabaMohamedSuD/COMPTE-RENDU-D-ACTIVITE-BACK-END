import { User } from './User';

import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, HasMany, ForeignKey, AllowNull, Unique, NotNull, Default, HasOne, BelongsTo } from "sequelize-typescript";



@Scopes(() => ({
    absences: {

    },
}))
@Table
export class Absence extends Model<Absence> {

    @AllowNull(false)
    @Column
    CP!: boolean;

    @AllowNull(false)
    @Column
    ANR!: boolean;

    @AllowNull(false)
    @Column
    AM!: boolean;

    @AllowNull(false)
    @Column
    CE!: boolean;

    @AllowNull(false)
    @Column
    DIV!: boolean;



    @AllowNull(false)
    @Column
    Day!: Number;

    @AllowNull(false)
    @Column
    Year!: Number;



    @CreatedAt
    @Column
    CreatedAt!: Date;

    @UpdatedAt
    @Column
    UpdatedAt!: Date;



    @HasMany(() => User, 'AbsenceId')
    users?: User[];








}