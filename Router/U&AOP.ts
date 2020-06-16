import { CreateUser } from '../Controller/Strategies/Elements/CreateUser';
import { SignIn } from '../Controller/Strategies/Elements/SigIn';


import { Context } from '../Controller/Strategies/Context';
import express from 'express';
import { TestStrategy } from '../Controller/Strategies/Elements/Test';
const router = express.Router();


/*

{
"email":"med1998yz@gmail.com",
"firstname":"Mohamed",
"lastname":"Boushaba",
"bcode":"15",
"activity":{
    type:"presence"
    day:"15",
    month:"5",
    year:"2020",
    mission:false,
    format:true,
    inter:false
}
}



*/

router.post('/', (req, res) => {




});


exports.router = router;
