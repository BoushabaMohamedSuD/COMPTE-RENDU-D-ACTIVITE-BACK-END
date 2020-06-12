import { CheckPassword } from './../../Responsibilities/Elements/Authentication/CheckPassword';
import { FetchUserInfo } from './../../Responsibilities/Elements/FetchData/FetchUserInfo';
import { CreateToken } from './../../Responsibilities/Elements/Authentication/CreateToken/CreateToken';
import { Test } from './../../Responsibilities/Elements/Test/Test';
import { ResponsibilitiesHolder } from './../../Responsibilities/Holders/ResponsibilitiesHolder';

import { StrategiesHolder } from './../holders/StrategiesHolder';
export class SignIn implements StrategiesHolder {
    private chaine!: ResponsibilitiesHolder;
    private req: any;
    private data: {
        request: {

        },
        elements: {

        },
        response: {

        }

    };
    constructor(req: any) {
        this.req = req;
        this.data = {
            request: {

            },
            elements: {

            },
            response: {

            }
        };


        this.treatment();


        this.chaine = FetchUserInfo.setFactorie(this.data, 'email')
            .setNextChaine(new CheckPassword(this.data))
            .setNextChaine(new CreateToken(this.data));





    }

    public process(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.chaine
                .process()
                .then((resp) => {
                    //resp true or false
                    if (resp) {
                        //if the response is true we resolve data
                        //  console.log(this.data);
                        resolve(this.data);
                    } else {
                        // if not some of resp fails
                        reject("some of respo fails");

                    }
                })
                .catch(err => {
                    //some of respo reject an error
                    reject(err);
                });

        })
    };

    private treatment(): void {
        const bodey = JSON.stringify(this.req.body)
        const headers = JSON.stringify(this.req.headers)
        this.data.request = {
            ...this.data.request,
            bodey,
            headers
        }
        console.log(this.data);

    }


}