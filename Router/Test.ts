

import express from 'express';

const router = express.Router();


//for testing 

router.post('/test', (req, res) => {

    console.log(req);

});


exports.router = router;
