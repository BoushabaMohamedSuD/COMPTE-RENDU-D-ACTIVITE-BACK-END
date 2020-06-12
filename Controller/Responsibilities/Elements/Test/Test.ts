import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';
export class Test implements ResponsibilitiesHolder {

    private Nextchaine!: ResponsibilitiesHolder;
    private data: {
        request: any,
        elements: any,
        response: any

    };;

    constructor(
        data: {
            request: any[],
            elements: any[],
            response: any[]
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
            // code here

            console.log("ùùùùùùùùùùùùùùùùùùùù")

            // console.log(this.data.request)
            console.log(this.data.request.bodey.Name)

            console.log("ùùùùùùùùùùùùùùùùùùùù")

            this.data.elements = {
                ...this.data.elements,
                Test: "Test"
            };
            this.data.response = {
                ...this.data.response,
                status: "Ok"
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