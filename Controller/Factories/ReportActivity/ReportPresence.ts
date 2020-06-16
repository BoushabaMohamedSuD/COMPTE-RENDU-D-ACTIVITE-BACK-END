import { Presence } from './../../../Model/models/Presence';
import { Model } from 'sequelize-typescript';
import { User } from './../../../Model/models/User';
import { ResponsibilitiesHolder } from './../../Responsibilities/Holders/ResponsibilitiesHolder';



export class ReportPresence implements ResponsibilitiesHolder {

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





            let info = {
                Day: this.data.request.bodey.activity.day,
                Month: this.data.request.bodey.activity.month,
                Year: this.data.request.bodey.activity.year,
                Mission: this.data.request.bodey.activity.mission,
                Format: this.data.request.bodey.activity.format,
                Inter: this.data.request.bodey.activity.inter

            }
            console.log(info);

            Presence.create(info)
                .then((presence) => {
                    this.data.elements
                        .model.user.$add('presences', presence)
                        .then((resp: any) => {
                            this.data.elements
                                .model.user.$get('presences')
                                .then((presences: any) => {

                                    this.data.response = {
                                        ...this.data.response,
                                        presence: presences
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
                                .catch(((err: any) => {
                                    console.log(err);
                                    reject(err);
                                }))




                        })
                        .catch((err: any) => {
                            console.log(err);
                            reject(err);
                        })



                })
                .catch((err) => {
                    console.log(err);
                    reject(err)
                })








        })
    };



}