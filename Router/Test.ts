

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
            res.status(400).send("Test failed");
        });




});


exports.router = router;
