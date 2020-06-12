import { User } from '../../../../Model/models/User';
import { ResponsibilitiesHolder } from '../../../Responsibilities/Holders/ResponsibilitiesHolder';



export class VUA_USER_EMAIL implements ResponsibilitiesHolder {

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

            User.findOne({ where: { Email: this.data.elements.bcode } })
                .then((user) => {

                    if (user != null) {
                        if (user.Authority == "user") {
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
                            let err = "user is not an user for make this operation";
                            console.log(err);
                            reject(err);


                        }


                    } else {
                        let err = "user is null from vua user email";
                        console.log(err);
                        reject(err);

                    }


                }).catch((err) => {
                    console.log(err);
                    reject(err);
                })





        })
    };



}