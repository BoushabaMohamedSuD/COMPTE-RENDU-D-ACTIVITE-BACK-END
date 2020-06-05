
import { Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, HasMany, ForeignKey, AllowNull, Unique, NotNull, Default, HasOne, BelongsTo } from "sequelize-typescript";



@Scopes(() => ({
    absences: {

    },
}))
@Table
export class Absence extends Model<Absence> {



    @CreatedAt
    @Column
    CreatedAt!: Date;

    @UpdatedAt
    @Column
    UpdatedAt!: Date;





}