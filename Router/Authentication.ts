import { SignIn } from './../Controller/Strategies/Elements/SigIn';


import { Context } from './../Controller/Strategies/Context';
import express from 'express';
import { TestStrategy } from '../Controller/Strategies/Elements/Test';
const router = express.Router();


//for testing 


// the request body should vbe as 

/*
{
    email:"med1998yz@gmail.com"  OR    bcode:"15623"
    password:"********"
}
*/

router.post('/SignIn', (req, res) => {
    console.log("Test Strategy");

    new Context(new SignIn(req))
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
            res.status(400).send("Sign failed : " + err);
        });




});


exports.router = router;
