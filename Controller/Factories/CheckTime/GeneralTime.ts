import { User } from './../../../Model/models/User';
import { ResponsibilitiesHolder } from './../../Responsibilities/Holders/ResponsibilitiesHolder';



export class GeneralTime implements ResponsibilitiesHolder {

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



            let day = this.data.request.bodey.today.day;
            let month = this.data.request.bodey.today.month;
            let year = this.data.request.bodey.today.year;

            if (
                day = new Date().getDay(),
                month = new Date().getMonth(),
                year = new Date().getFullYear()
            ) {
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


            } else {
                let err = "Error :time is not matched with the server time  for general actions"
                console.log(err);
                reject(err);

            }




        })
    };



}