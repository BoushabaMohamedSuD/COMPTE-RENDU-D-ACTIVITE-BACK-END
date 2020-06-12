import { Token } from './../Model/models/Token';
import { User } from './../Model/models/User';


import { Context } from './../Controller/Strategies/Context';
import express from 'express';
import { TestStrategy } from '../Controller/Strategies/Elements/Test';
const router = express.Router();


//for testing 

router.post('/', (req, res) => {
    console.log("Test Strategy");

    new Context(new TestStrategy(req))
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
            res.status(400).send("Test failed : " + err);
        });




});

router.post('/1', (req, res) => {
    console.log("Test Strategy");


    Token.destroy({ where: { Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiTW9oYW1lZCIsImxhc3RuYW1lIjoiQm91c2hhYmEiLCJiY29kZSI6IjE1IiwiZW1haWwiOiJtZWQxOTk4eXpAZ21haWwuY29tIiwiaWF0IjoxNTkxOTM0NjQ4LCJleHAiOjE1OTE5MzQ2NTh9.HxNfl3km_Id6M9-y5_5_3edyHTcXn-29da4SQzhKuWs" } })
        .then((resp) => {

        })
        .catch((err) => {

        })




});


const DeleteToken = (email: string) => {
    return new Promise((resolve, reject) => {
        User.findOne({ where: { email: email } })
            .then(user => {
                if (user != null) {
                    user.$get('token')
                        .then(crtoken => {
                            if (crtoken != null) {
                                crtoken.$remove('userId', user);
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            reject(err);
                        })
                }
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            })
    })
}


exports.router = router;
