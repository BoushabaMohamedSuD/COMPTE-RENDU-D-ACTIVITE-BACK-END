import { ResponsibilitiesHolder } from './../../Responsibilities/Holders/ResponsibilitiesHolder';



export class FetchUserInfoBCode implements ResponsibilitiesHolder {

    private Nextchaine!: ResponsibilitiesHolder;
    //private SubRespo!: SubRespoHolder;

    private data: {
        request: {

        },
        elements: {

        },
        response: {

        }

    };;

    constructor(
        data: {
            request: {

            },
            elements: {

            },
            response: {

            }

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
    };


}