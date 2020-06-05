
import { StrategiesHolder } from './../holders/StrategiesHolder';
export class UplaodFile implements StrategiesHolder {
    // private chaine!: ResponsibilitiesHolder;
    private event: any;
    private data: {
        request: {

        },
        data: {

        },
        response: {

        }

    };
    constructor(event: any) {
        this.event = event;
        this.data = {
            request: {

            },
            data: {

            },
            response: {

            }
        };


        this.treatment();




    }

    public process(): Promise<any> {
        return new Promise((resolve, reject) => {
            /*this.chaine
                .process()
                .then((resp) => {
                    //resp true or false
                    if (resp) {
                        //if the response is true we resolve data
                        resolve(this.data.response);
                    } else {
                        // if not some of resp fails
                        reject("some of respo fails");

                    }
                })
                .catch(err => {
                    //some of respo reject an error
                    reject(err);
                });*/

        })
    };

    private treatment(): void {
        let body = JSON.parse(this.event.body);
        /*this.data.request.email = this.event.requestContext.authorizer.claims.email;
        //this.data.request.email = "nodejs1998yz@gmail.com"
        this.data.request.key = body.key;
        this.data.request.folder = body.folder;
        this.data.request.fileSize = body.fileSize;
        this.data.request.type = body.type;*/
        console.log(this.data);

    }


}