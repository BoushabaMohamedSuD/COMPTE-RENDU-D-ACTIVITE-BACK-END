import { User } from './User';

import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, HasMany, ForeignKey, AllowNull, Unique, NotNull, Default, HasOne, BelongsTo, DataType } from "sequelize-typescript";



@Scopes(() => ({
    comments: {

    },
}))
@Table
export class Comment extends Model<Comment> {


    @Column(DataType.TEXT({ length: "long" }))
    comment!: string;



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