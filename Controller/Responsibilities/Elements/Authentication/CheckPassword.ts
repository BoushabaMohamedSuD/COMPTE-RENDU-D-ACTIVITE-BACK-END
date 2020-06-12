import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';




export class CheckPassword implements ResponsibilitiesHolder {

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

            console.log("check password");

            const reqPassword = this.data.request.bodey.password;
            const oriPassword = this.data.elements.password;

            if (reqPassword == oriPassword) {
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

                const err = "password is incorrect"
                console.log(err);
                reject(err);

            }





        })
    };


}