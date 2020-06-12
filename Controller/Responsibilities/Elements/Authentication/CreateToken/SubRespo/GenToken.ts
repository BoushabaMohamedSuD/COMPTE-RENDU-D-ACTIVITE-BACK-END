import { ResponsibilitiesHolder } from './../../../../Holders/ResponsibilitiesHolder';
import jwt from 'jsonwebtoken';

export class GenToken implements ResponsibilitiesHolder {

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

            console.log("Generate Token");

            jwt.sign({
                id: this.data.elements.id,
                firstname: this.data.elements.firstname,
                lastname: this.data.elements.lastname,
                bcode: this.data.elements.bcode,
                email: this.data.elements.email
            }, 'test', { expiresIn: 60 * 5 }, (errToken, resToken) => {

                if (!errToken) {

                    this.data.response = {
                        ...this.data.response,
                        token: resToken,
                    }
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
                    let err = "cannot gen token"
                    reject(err);
                }
            });


        })
    };

}