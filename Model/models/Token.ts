import { Test } from './../../Controller/Responsibilities/Elements/Test/Test';
import { User } from './User';

import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, HasMany, ForeignKey, AllowNull, Unique, NotNull, Default, HasOne, BelongsTo, DataType, Length } from "sequelize-typescript";



@Scopes(() => ({
    tokens: {

    },
}))
@Table
export class Token extends Model<Token> {


    // you cannot use @uniqe with text

    @AllowNull(false)
    @Column(DataType.TEXT({ length: "long" }))
    Token!: string;

    @CreatedAt
    @Column
    CreatedAt!: Date;

    @UpdatedAt
    @Column
    UpdatedAt!: Date;



    @ForeignKey(() => User)
    UserId!: number;






}