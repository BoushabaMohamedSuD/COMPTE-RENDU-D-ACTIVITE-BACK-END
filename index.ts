import { User } from './Model/models/User';

import express from 'express';
import bodyParser from 'body-parser';
import { Port } from './proprieties/Port';
import { sequelize } from './Model/Controller';


const app = express();

const port = Port.getInstance().getPort();


const RouterTest = require('./Router/Test').router;
const RouterSignIn = require('./Router/Authentication').router;
const RouterAdminOp = require('./Router/AdminOp').router;


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "Username,Authorization,authorization,PictureData");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Authorization,Username,Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser({ extended: false }));


app.use(RouterSignIn);
app.use('/Admin', RouterAdminOp);
app.use('/Test', RouterTest);




sequelize.sync(/*{ force: true }*/)
    .then(() => {
        /*User.bulkCreate([{
            FirstName: "Mohamed",
            LastName: "Boushaba",
            Email: "med1998yz@gmail.com",
            Password: "1234",
            BusinessCode: "15",
            Authority: "admin"

        }, {
            FirstName: "Jlil",
            LastName: "Tibari",
            Email: "Tibari@gmail.com",
            Password: "0123",
            BusinessCode: "12",
            Authority: "admin"

        }]).then(() => console.log("user has been created"))*/

        const server = app.listen(port, () => {
            console.log("server Listening in port : " + port);
        });
    })
    .catch(err => {
        console.log(err);
    })
