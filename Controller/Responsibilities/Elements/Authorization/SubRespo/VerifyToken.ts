import { JWT } from './../../../../../proprieties/JWT';
import { SubRespoHolder } from './../../../Holders/SubRespoHolder';


import jwt from 'jsonwebtoken';
import { userInfo } from 'os';

export class VerifyToken implements SubRespoHolder {

    private Nextchaine!: SubRespoHolder;
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

    public setNextChaine(chaine: SubRespoHolder): SubRespoHolder {
        this.Nextchaine = chaine;
        return this.Nextchaine;
    }

    public process(): Promise<any> {
        return new Promise((resolve, reject) => {

            console.log("Verify Token");
            const reqToken = this.data.elements.reqtoken;
            jwt.verify(reqToken, JWT.getInstance().getPassword(), (err: any, userData: any) => {
                if (!err) {

                    if (this.checkValidation(userData)) {

                        if (this.Nextchaine != null) {
                            console.log('going to next chaine');
                            this.Nextchaine.process()
                                .then((resp) => {
                                    // resp is her false or true
                                    if (resp) {
                                        resolve(resp);
                                    } else {
                                        reject(resp);
                                    }

                                })
                                .catch((err) => {
                                    // console.log(err);
                                    //console.log('Error');
                                    reject(err);
                                });
                        } else {
                            console.log('this is the end of the chaine');
                            resolve(true);
                        }

                    } else {
                        const errs = "ERorr on authorization";
                        reject(errs);

                    }


                } else {
                    console.log(err);
                    reject(err);
                }

            })




        })
    };

    private checkValidation(userdata: any): boolean {

        const lastname = this.data.request.bodey.lastname;
        const firstname = this.data.request.bodey.firstname;
        const email = this.data.request.bodey.email;
        const bcode = this.data.request.bodey.bcode;

        if (userdata.lastname != lastname) {
            return false;
        }
        if (userdata.firstname != firstname) {
            return false;
        }
        if (userdata.email != email) {
            return false;
        }
        if (userdata.bcode != bcode) {
            return false;
        }


        return true;
    }

}