import { User } from './User';

import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, HasMany, ForeignKey, AllowNull, Unique, NotNull, Default, HasOne, BelongsTo } from "sequelize-typescript";



@Scopes(() => ({
    tokens: {

    },
}))
@Table
export class Token extends Model<Token> {


    @AllowNull(false)
    @Column
    Tokens!: string;

    @CreatedAt
    @Column
    CreatedAt!: Date;

    @UpdatedAt
    @Column
    UpdatedAt!: Date;



    @ForeignKey(() => User)
    UserId!: number;






}