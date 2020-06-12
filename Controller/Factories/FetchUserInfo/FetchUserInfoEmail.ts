import { GenToken } from './SubRespo/GenToken';
import { CheckTokenDB } from './SubRespo/CheckTokenDB';
import { SubRespoHolder } from './../../../Holders/SubRespoHolder';
import { ResponsibilitiesHolder } from './../../../Holders/ResponsibilitiesHolder';
import { resolve } from 'bluebird';

export class CreateToken implements ResponsibilitiesHolder {

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





        })
    };


}