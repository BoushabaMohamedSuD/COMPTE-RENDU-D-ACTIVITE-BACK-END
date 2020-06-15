import { User } from './User';

import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, HasMany, ForeignKey, AllowNull, Unique, NotNull, Default, HasOne, BelongsTo } from "sequelize-typescript";



@Scopes(() => ({
    comments: {

    },
}))
@Table
export class Comment extends Model<Comment> {


    @Column
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