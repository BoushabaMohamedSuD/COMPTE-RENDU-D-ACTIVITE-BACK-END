import { User } from './User';

import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, HasMany, ForeignKey, AllowNull, Unique, NotNull, Default, HasOne, BelongsTo } from "sequelize-typescript";



@Scopes(() => ({
    presences: {

    },
}))
@Table
export class Presence extends Model<Presence> {

    @AllowNull(false)
    @Column
    Mission!: boolean;

    @AllowNull(false)
    @Column
    Format!: boolean;

    @AllowNull(false)
    @Column
    Inter!: boolean;


    @AllowNull(false)
    @Column
    Day!: Number;


    @AllowNull(false)
    @Column
    Month!: Number

    @AllowNull(false)
    @Column
    Year!: Number;


    @CreatedAt
    @Column
    CreatedAt!: Date;

    @UpdatedAt
    @Column
    UpdatedAt!: Date;



    @ForeignKey(() => User)
    UserId!: number;




}