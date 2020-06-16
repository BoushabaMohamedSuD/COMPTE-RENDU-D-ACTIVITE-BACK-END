import { TokenValidation } from './../../../Responsibilities/Elements/Authorization/TokenValidation';
import { ResponsibilitiesHolder } from './../../../Responsibilities/Holders/ResponsibilitiesHolder';
import { StrategiesHolder } from './../../Holders/StrategiesHolder';

export class ReadAllActivites implements StrategiesHolder {
    private chaine!: ResponsibilitiesHolder;
    private req: any;
    private data: {
        request: any,
        elements: any,
        response: any

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

        this.chaine = new TokenValidation(this.data);











    }

    public process(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.chaine != null) {
                this.chaine
                    .process()
                    .then((resp) => {
                        //resp true or false
                        if (resp) {
                            //if the response is true we resolve data

                            console.log(this.data);
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

            } else {
                console.log("no chaine is defined yet");
                /* this.data.response = {
                     ...this.data.response,
                     ...this.data.request,
                     ...this.data.elements
                 }*/
                //resolve(this.data);
                reject("no chaine is defined yet")
            }


        })
    };

    private treatment(): void {

        // the token is in
        // (this.data.request.headers.autorization).split(" ")[1]

        const bodey = this.req.body
        const headers = this.req.headers
        this.data.request = {
            ...this.data.request,
            bodey,
            headers
        }
        this.data.elements = {
            ...this.data.elements,
            reqtoken: (headers.authorization.split(" "))[1],
            email: this.data.request.bodey.email
        }
        //console.log(this.data);

    }


}