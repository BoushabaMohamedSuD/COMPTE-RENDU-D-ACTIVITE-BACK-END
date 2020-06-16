import { ReadAllActivitesStrategy } from './../Controller/Strategies/Elements/ReadActivities/ReadAllAcitvities';
import { ReportActivityComment } from './../Controller/Strategies/Elements/ReportActivity/ReportActivityComment';
import { ReportComment } from './../Controller/Factories/ReportActivity/ReportComment';
import { ReportActivityAbsence } from './../Controller/Strategies/Elements/ReportActivity/ReportActivityAbsence';
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
    "today":{
        "day": 11,
        "month": 6,
        "year": 2020,
    }
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
router.post('/ReportAbsence', (req, res) => {

    console.log("reprot activity absence ")
    new Context(new ReportActivityAbsence(req))
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
            res.status(400).send("report absence activity  failed : " + err);
        });



});
router.post('/ReportComment', (req, res) => {

    console.log("reprot activity comment ")
    new Context(new ReportActivityComment(req))
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
            res.status(400).send("report comment activity  failed : " + err);
        });



});




//*************************************************** */

/*
{
    "email": "med1998yz@gmail.com",
    "firstname": "Mohamed",
    "lastname": "Boushaba",
    "bcode": "15",
    "month":4,
     "year":8
}

}

*/


router.get('/GetAcivities', (req, res) => {

    console.log("get activities info ")
    new Context(new ReadAllActivitesStrategy(req))
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
            res.status(400).send("get activites info  failed : " + err);
        });



});




exports.router = router;
