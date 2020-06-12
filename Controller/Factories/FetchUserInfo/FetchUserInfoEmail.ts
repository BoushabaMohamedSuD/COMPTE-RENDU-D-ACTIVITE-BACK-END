import { User } from './../../../Model/models/User';
import { ResponsibilitiesHolder } from './../../Responsibilities/Holders/ResponsibilitiesHolder';



export class FetchUserInfoEmail implements ResponsibilitiesHolder {

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

            console.log("fetch user by email");

            User.findOne({ where: { Email: this.data.request.bodey.email } })
                .then(user => {
                    // console.log(user);
                    if (user != null) {

                        this.data.elements = {
                            ...this.data.elements,
                            id: user.id,
                            email: user.Email,
                            password: user.Password,
                            authority: user.Authority,
                            isActive: user.IsActive,
                            firstname: user.FirstName,
                            lastname: user.LastName,
                            bcode: user.BusinessCode

                        }

                        this.data.response = {
                            id: user.id,
                            email: user.Email,
                            authority: user.Authority,
                            isActive: user.IsActive,
                            firstname: user.FirstName,
                            lastname: user.LastName,
                            bcode: user.BusinessCode
                        }

                        user.$get('token')
                            .then(token => {
                                if (token != null) {

                                    this.data.elements = {
                                        ...this.data.elements,
                                        token: token
                                    }


                                } else {

                                    console.log("user have no token yet");

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
                            .catch((err) => {
                                console.log(err);
                                reject(err);
                            })



                    } else {
                        let err = "user is null";
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