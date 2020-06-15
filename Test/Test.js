// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

var ses = new AWS.SES();


// Create sendEmail params 
let data = "Hello dear username \n"
    + "you are now officially an active member of our "
    + "community eRAB technologies "
    + "those information below are your credentials \n \n"
    + "Firstname: Test1\n"
    + "Lastname: Test2\n\n"
    + "made it by\n\n"
    + "Firstname: main1\n"
    + "Lastname: main2";
console.log(data);
var params = {
    Destination: { /* required */
        CcAddresses: [
            'nodejs1998yz@gmail.com',

        ],
        ToAddresses: [
            'nodejs1998yz@gmail.com',

        ]
    },
    Message: { /* required */
        Body: { /* required */

            Text: {
                Charset: "UTF-8",
                Data: data
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Felicitation'
        }
    },
    Source: 'erabteam@gmail.com', /* required */

};


ses.sendEmail(params, (err, data) => {
    if (err) {
        console.log(err);
        console.log("ERROR");
    } else {
        console.log(data);
    }
})
