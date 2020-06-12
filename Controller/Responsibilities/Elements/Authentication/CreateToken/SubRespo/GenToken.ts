import { ResponsibilitiesHolder } from './../../../../Holders/ResponsibilitiesHolder';

export class GenToken implements ResponsibilitiesHolder {

    private Nextchaine!: ResponsibilitiesHolder;
    private data: {
        request: any,
        elements: any,
        response: any

    };;

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

            console.log("Generate Token");

            this.data.response = {
                ...this.data.response,
                Token: "456fd465sdfjzjds"
            }


            if (this.Nextchaine != null) {
                console.log('going to next chaine');
                this.Nextchaine.process()
                    .then((resp) => {
                        // resp is her false or true
                        if (resp) {
                            resolve(resp);
                        } else {
                            reject(resp);
                        }

                    })
                    .catch((err) => {
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