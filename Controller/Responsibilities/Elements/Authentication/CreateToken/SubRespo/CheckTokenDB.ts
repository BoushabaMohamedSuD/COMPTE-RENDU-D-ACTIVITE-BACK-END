import { Token } from './../../../../../../Model/models/Token';
import { ResponsibilitiesHolder } from './../../../../Holders/ResponsibilitiesHolder';
import { or } from 'sequelize/types';

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

                this.data.response = {
                    ...this.data.elements,
                    token: oriToken
                }

            }



        })
    };

}