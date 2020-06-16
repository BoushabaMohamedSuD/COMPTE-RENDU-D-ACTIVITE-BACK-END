import { CreateUser } from '../Controller/Strategies/Elements/CreateUser';
import { SignIn } from '../Controller/Strategies/Elements/SigIn';


import { Context } from '../Controller/Strategies/Context';
import express from 'express';
import { TestStrategy } from '../Controller/Strategies/Elements/Test';
const router = express.Router();


//for testing 


// the request body should vbe as 

/*
{
"email":"med1998yz@gmail.com",
"firstname":"Mohamed",
"lastname":"Boushaba",
"bcode":"15",
"target":{
    "email":"mefdfd1998yz@gmail.com",
    "firstname":"Mohamed",
    "lastname":"Boushaba",
    "bcode":"155",
    "password":"tysK453"

}
}
*/

router.post('/CreateUser', (req, res) => {
    console.log("create user  Strategy");

    new Context(new CreateUser(req))
        .process()
        .then((
            data: {
                request: any,
                elements: any,
                response: any

            }) => {
            res.send(data.response);

        })
        .catch((err) => {
            res.status(400).send("create user  failed : " + err);
        });




});


exports.router = router;
