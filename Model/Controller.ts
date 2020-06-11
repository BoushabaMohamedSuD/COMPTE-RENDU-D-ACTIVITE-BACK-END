import { Token } from './models/Token';
import { Comment } from './models/Comment';
import { Absence } from './models/Absence';
import { Presence } from './models/Presence';
import { User } from './models/User';
import { DB } from './../proprieties/DB';

export { };
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database: DB.getInstance().getdatabase(),
    username: DB.getInstance().getusername(),
    password: DB.getInstance().getpassword(),
    dialect: DB.getInstance().getdialect(),
    host: DB.getInstance().gethost(),
    pool: DB.getInstance().getpool(),



    models: [User, Presence, Absence, Comment, Token],
});