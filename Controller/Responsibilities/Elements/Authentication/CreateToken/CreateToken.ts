import { GenToken } from './SubRespo/GenToken';
import { CheckTokenDB } from './SubRespo/CheckTokenDB';
import { SubRespoHolder } from './../../../Holders/SubRespoHolder';
import { ResponsibilitiesHolder } from './../../../Holders/ResponsibilitiesHolder';
import { resolve } from 'bluebird';

export class CreateToken implements ResponsibilitiesHolder {

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

            this.subProcess([
                new CheckTokenDB(this.data),
                new GenToken(this.data)

            ])
                .then((res) => {
                    if (res) {
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

                    } else {
                        reject("some of sub respo fails")
                    }

                })
                .catch((err) => {

                    reject(err);

                })




        })
    };


    private subProcess(ArrayRespos: SubRespoHolder[]) {

        let i = 0;
        ArrayRespos.forEach(element => {
            if (i > 0) {
                ArrayRespos[i - 1].setNextChaine(ArrayRespos[i])
            }

            i++;
        });
        return new Promise((res, rej) => {
            ArrayRespos[0]
                .process()
                .then((result) => {

                    if (result) {

                        res(result);

                    } else {
                        rej("some of sub respo fails")
                    }

                })
                .catch((err) => {

                    console.log(err)
                    rej(err);
                })

        })


    }

}