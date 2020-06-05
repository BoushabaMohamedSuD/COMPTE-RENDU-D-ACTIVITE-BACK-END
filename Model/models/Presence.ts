
import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, HasMany, ForeignKey, AllowNull, Unique, NotNull, Default, HasOne, BelongsTo } from "sequelize-typescript";



@Scopes(() => ({
    presences: {

    },
}))
@Table
export class Presence extends Model<Presence> {



    @CreatedAt
    @Column
    CreatedAt!: Date;

    @UpdatedAt
    @Column
    UpdatedAt!: Date;





}