
import express from 'express';
import bodyParser from 'body-parser';


const app = express();
//const five = require("johnny-five");


//const board = new five.Board();




//initializing the configuration
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "Username,Authorization,authorization,PictureData");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Authorization,Username,Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser({ extended: false }));

const server = app.listen(4000, () => {
    console.log("server Listening in port : ");
});