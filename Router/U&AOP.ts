import { ReportActivityPresence } from '../Controller/Strategies/Elements/ReportActivity/ReportPresenceActivity';

import { CreateUser } from '../Controller/Strategies/Elements/CreateUser';
import { SignIn } from '../Controller/Strategies/Elements/SigIn';


import { Context } from '../Controller/Strategies/Context';
import express from 'express';
import { TestStrategy } from '../Controller/Strategies/Elements/Test';
const router = express.Router();


/*
{
    "email": "med1998yz@gmail.com",
    "firstname": "Mohamed",
    "lastname": "Boushaba",
    "bcode": "15",
    "activity": {
        "type": "presence",
        "day": 11,
        "month": 6,
        "year": 2020,
        "mission": true,
        "format": false,
        "inter": false
    }
}


*/

router.post('/ReportPresence', (req, res) => {

    console.log("reprot activity presence ")
    new Context(new ReportActivityPresence(req))
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
            res.status(400).send("report presence activity  failed : " + err);
        });



});


exports.router = router;
