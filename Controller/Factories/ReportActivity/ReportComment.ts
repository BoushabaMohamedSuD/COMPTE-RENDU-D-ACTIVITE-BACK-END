import { Comment } from './../../../Model/models/Comment';
import { Presence } from './../../../Model/models/Presence';
import { Model } from 'sequelize-typescript';
import { User } from './../../../Model/models/User';
import { ResponsibilitiesHolder } from './../../Responsibilities/Holders/ResponsibilitiesHolder';



export class ReportComment implements ResponsibilitiesHolder {

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
                comment: this.data.request.bodey.activity.comment,

            }
            console.log(info);



            Comment.findOne({
                where: {
                    Day: info.Day,
                    Month: info.Month,
                    Year: info.Year
                }
            })
                .then((oripre) => {
                    if (oripre == null || oripre == undefined) {
                        console.log("create Comment");
                        this.data.response = {
                            ...this.data.response,
                            statusComment: "create Comment"
                        }

                        Comment.create(info)
                            .then((comment) => {
                                this.data.elements
                                    .model.user.$add('comments', comment)
                                    .then((resp: any) => {


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
                                    .catch((err: any) => {
                                        console.log(err);
                                        reject(err);
                                    })



                            })
                            .catch((err) => {
                                console.log(err);
                                reject(err)
                            })




                    } else {
                        console.log("update Comment");
                        this.data.response = {
                            ...this.data.response,
                            statusComment: "Update Comment"
                        }
                        Comment.update(info,
                            {
                                where: {
                                    Day: info.Day,
                                    Month: info.Month,
                                    Year: info.Year
                                }
                            })
                            .then((comment) => {
                                this.data.elements
                                    .model.user.$add('comments', comment)
                                    .then((resp: any) => {


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
                                    .catch((err: any) => {
                                        console.log(err);
                                        reject(err);
                                    })



                            })
                            .catch((err) => {
                                console.log(err);
                                reject(err)
                            })


                    }
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                })









        })
    };



}