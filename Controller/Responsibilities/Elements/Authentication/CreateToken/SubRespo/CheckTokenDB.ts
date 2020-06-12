import { User } from './../../../../../../Model/models/User';
import { Model } from 'sequelize-typescript';
import { JWT } from './../../../../../../proprieties/JWT';

import { Token } from './../../../../../../Model/models/Token';
import { ResponsibilitiesHolder } from './../../../../Holders/ResponsibilitiesHolder';
import { or } from 'sequelize/types';
import jwt from 'jsonwebtoken';

export class CheckTokenDB implements ResponsibilitiesHolder {

    private Nextchaine!: ResponsibilitiesHolder;
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

    public setNextChaine(chaine: ResponsibilitiesHolder): ResponsibilitiesHolder {
        this.Nextchaine = chaine;
        return this.Nextchaine;
    }

    public process(): Promise<any> {
        return new Promise((resolve, reject) => {

            console.log("Check Token DB");

            let oriToken = this.data.elements.token;
            if (oriToken == null || oriToken == undefined || oriToken == "") {

                console.log("user has not token yet");
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
                console.log(oriToken)

                jwt.verify(oriToken, JWT.getInstance().getPassword(), (err: any, userData: any) => {

                    let removeOldToken = false;

                    if (!err) {
                        if (userData == null) {
                            console.log("user Data is null");
                            removeOldToken = true;
                        }

                    } else {
                        console.log(err);
                        removeOldToken = true

                    }



                    if (!removeOldToken) {

                        this.data.elements = {
                            ...this.data.elements,
                            token: oriToken
                        }

                        console.log('user has already a token and token still valide');
                        resolve(true);

                    } else {

                        console.log("remove old token");


                        Token.destroy({ where: { Token: oriToken } })
                            .then((resp) => {
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


                            })
                            .catch((err) => {
                                console.log(err);
                                reject(err);

                            })




                    }

                })






            }



        })
    };


    // NOT used YET

    public DeleteToken(email: string) {
        return new Promise((resolve, reject) => {
            User.findOne({ where: { email: email } })
                .then(user => {
                    if (user != null) {
                        user.$get('token')
                            .then(crtoken => {
                                if (crtoken != null) {
                                    user.$remove('token', crtoken);
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                                reject(err);
                            })
                    }
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                })
        })
    }

}