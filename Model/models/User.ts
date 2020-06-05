
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
    FirstName!: string;

    @AllowNull(false)
    @Column
    LastName!: string;

    @AllowNull(false)
    @Column
    password!: string;

    @AllowNull(false)
    @Column
    BusinessCode!: string;


    @AllowNull(false)
    @Default('user')
    @Column
    Authority!: string;

    @AllowNull(false)
    @Default(true)
    @Column
    IsActive!: boolean;

    @CreatedAt
    @Column
    CreatedAt!: Date;

    @UpdatedAt
    @Column
    UpdatedAt!: Date;


    /* @ForeignKey(() => RasberySql)
     RasberyId!: number;
 
     @BelongsTo(() => RasberySql)
     RasberyHolder?: RasberySql;*/


}