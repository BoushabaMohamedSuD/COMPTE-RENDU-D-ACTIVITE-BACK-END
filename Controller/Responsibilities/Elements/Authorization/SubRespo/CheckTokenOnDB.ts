import { Token } from './../../../../../Model/models/Token';
import { SubRespoHolder } from './../../../Holders/SubRespoHolder';


import jwt from 'jsonwebtoken';
import { userInfo } from 'os';

export class CheckTokenOnDB implements SubRespoHolder {

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

            console.log("check token  on DB");
            const reqToken = this.data.elements.reqtoken;

            Token.findOne({ where: { Token: reqToken } })
                .then((oriToken) => {
                    if (oriToken != null) {
                        console.log("Authorization successed");
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
                        let err = "ori token is null so dons't match with token in the request"
                        console.log(err);
                        reject(err);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);

                })





        })
    };

}