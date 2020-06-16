import { User } from './../../../Model/models/User';
import { ResponsibilitiesHolder } from './../../Responsibilities/Holders/ResponsibilitiesHolder';



export class ReadComments implements ResponsibilitiesHolder {

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



    public setNextChaine(chaine: ResponsibilitiesHolder): ResponsibilitiesHolder {
        this.Nextchaine = chaine;
        return this.Nextchaine;
    }

    public process(): Promise<any> {
        return new Promise((resolve, reject) => {

            this.data.elements
                .model.user.$get('comments')
                .then((comments: any) => {

                    let data: any[] = [];
                    comments.forEach((element: any) => {
                        if (element.Year == this.data.request.bodey.year) {
                            if (element.Month == this.data.request.bodey.month) {
                                data.push(element);
                            }
                        }

                    });
                    this.data.response = {
                        ...this.data.response,
                        comments: data
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
                })
                .catch((err: any) => {
                    console.log(err);
                    reject(err);
                })






        })
    };



}