
import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, HasMany, ForeignKey, AllowNull, Unique, NotNull, Default, HasOne, BelongsTo } from "sequelize-typescript";



@Scopes(() => ({
    users: {

    },
}))
@Table
export class User extends Model<User> {


    @AllowNull(false)
    @Unique
    @Column
    username!: string;

    @AllowNull(false)
    @Column
    password!: string;

}