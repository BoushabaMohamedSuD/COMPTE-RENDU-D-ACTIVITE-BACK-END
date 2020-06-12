import { Token } from './Token';
import { Comment } from './Comment';
import { Absence } from './Absence';
import { Presence } from './Presence';

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
    Email!: string;

    @AllowNull(false)
    @Unique
    @Column
    BusinessCode!: string;



    @AllowNull(false)
    @Column
    FirstName!: string;

    @AllowNull(false)
    @Column
    LastName!: string;

    @AllowNull(false)
    @Column
    Password!: string;



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




    @HasOne(() => Token, 'UserId')
    token?: Token;


    @HasMany(() => Presence, 'UserId')
    presences?: Presence[];
    @HasMany(() => Absence, 'UserId')
    absences?: Absence[];
    @HasMany(() => Comment, 'UserId')
    comments?: Comment[];


    /*@BelongsTo(() => RasberySql)
    RasberyHolder?: RasberySql;*/


}