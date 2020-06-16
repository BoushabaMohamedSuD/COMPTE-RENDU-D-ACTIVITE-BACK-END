import { Emails } from './../../../proprieties/Emails';
import { User } from './../../../Model/models/User';
import { ResponsibilitiesHolder } from './../../Responsibilities/Holders/ResponsibilitiesHolder';


const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const ses = new AWS.SES();



export class FelicitationEmail implements ResponsibilitiesHolder {

    private Nextchaine!: ResponsibilitiesHolder;
    //private SubRespo!: SubRespoHolder;


    private data: {
        request: any,
        elements: any,
        response: any
    };

    constructor(
        data: {
            request: any,
            elements: any,
            response: any
        }
    ) {
        this.data = data;

    }


    /* public setSubRespo(subRespo: SubRespoHolder): SubRespoHolder {
       
         return this.SubRespo
     }*/

    public setNextChaine(chaine: ResponsibilitiesHolder): ResponsibilitiesHolder {
        this.Nextchaine = chaine;
        return this.Nextchaine;
    }

    public process(): Promise<any> {
        return new Promise((resolve, reject) => {


            if (Emails.getInstance().getKey()) {
                let info = {
                    ori: {
                        email: this.data.elements.email,
                        firstname: this.data.elements.firstname,
                        lastname: this.data.elements.lastname,

                    },
                    target: {
                        email: this.data.request.bodey.target.email,
                        firsname: this.data.request.bodey.target.firstname,
                        lastname: this.data.request.bodey.target.lastname,
                        bcode: this.data.request.bodey.target.bcode,
                        password: this.data.request.bodey.target.password,

                    }
                }

                let data = "Hello dear " + info.target.lastname + " " + info.target.firsname + " \n"
                    + "you are now officially an active member of our "
                    + "community eRAB technologies "
                    + "those information below are your credentials \n \n"
                    + "Firstname:" + info.target.firsname + "\n"
                    + "Lastname: " + info.target.lastname + "\n"
                    + "Bcode: " + info.target.bcode + "\n"
                    + "Email: " + info.target.email + "\n"
                    + "Password: " + info.target.password + "\n\n"
                    + "made it by\n\n"
                    + "Firstname: " + info.ori.firstname + "\n"
                    + "Lastname: " + info.ori.lastname + "";
                console.log(data);
                var params = {
                    Destination: { /* required */
                        CcAddresses: [
                            info.target.email,

                        ],
                        ToAddresses: [
                            info.target.email,

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
                    Source: Emails.getInstance().getSource(), /* required */

                };


                ses.sendEmail(params, (err: any, data: any) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(data);
                        // console.log(data);
                        this.data.response = {
                            ...this.data.response,
                            statusEmail: true
                        }

                        if (this.Nextchaine != null) {
                            console.log('going to next chaine');
                            this.Nextchaine.process()
                                .then((resp: any) => {
                                    // resp is her false or true
                                    if (resp) {
                                        resolve(resp);
                                    } else {
                                        reject(resp);
                                    }

                                })
                                .catch((err: any) => {
                                    // console.log(err);
                                    //console.log('Error');
                                    reject(err);
                                });
                        } else {
                            console.log('this is the end of the chaine');
                            resolve(true);
                        }
                    }
                })

            } else {

                this.data.response = {
                    ...this.data.response,
                    statusEmail: false
                }

                if (this.Nextchaine != null) {
                    console.log('going to next chaine');
                    this.Nextchaine.process()
                        .then((resp: any) => {
                            // resp is her false or true
                            if (resp) {
                                resolve(resp);
                            } else {
                                reject(resp);
                            }

                        })
                        .catch((err: any) => {
                            // console.log(err);
                            //console.log('Error');
                            reject(err);
                        });
                } else {
                    console.log('this is the end of the chaine');
                    resolve(true);
                }

            }




        })
    };



}