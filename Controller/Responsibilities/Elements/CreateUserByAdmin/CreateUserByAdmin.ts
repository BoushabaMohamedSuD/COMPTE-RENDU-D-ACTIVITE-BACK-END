import { User } from './../../../../Model/models/User';
import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';




export class CreateUserByAdmin implements ResponsibilitiesHolder {

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

            console.log("Create User By Admin");

            User.create({
                FirstName: this.data.request.bodey.target.firstname,
                LastName: this.data.request.bodey.target.lastname,
                Email: this.data.request.bodey.target.email,
                Password: this.data.request.bodey.target.password,
                BusinessCode: this.data.request.bodey.target.bcode,
            })
                .then((user) => {
                    if (user != null) {

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

                    }
                })
                .catch((err) => {
                    console.log(err);
                    reject("canoot create user by admin");
                })




        })
    };


}