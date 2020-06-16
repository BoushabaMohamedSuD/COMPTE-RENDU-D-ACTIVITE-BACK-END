import { CheckTime } from '../../../Responsibilities/Elements/Common/CheckTime/CheckTime';
import { ReportActivityResp } from '../../../Responsibilities/Elements/ReportActivity/ReportActivityResp';
import { FetchUserInfo } from '../../../Responsibilities/Elements/Common/FetchData/FetchUserInfo';
import { SnedEmail } from '../../../Responsibilities/Elements/Common/Emails/SendEmail';
import { CreateUserByAdmin } from '../../../Responsibilities/Elements/CreateUserByAdmin/CreateUserByAdmin';
import { VerifyUserAuthority } from '../../../Responsibilities/Elements/Common/UserAuthority/VerifyUserAuthority';
import { TokenValidation } from '../../../Responsibilities/Elements/Authorization/TokenValidation';
import { SetUserActivity } from '../../../Responsibilities/Elements/Common/UserActivity/SetUserActivity';
import { CheckTokenDB } from '../../../Responsibilities/Elements/Authentication/CreateToken/SubRespo/CheckTokenDB';
import { CheckPassword } from '../../../Responsibilities/Elements/Authentication/CheckPassword';
import { CreateToken } from '../../../Responsibilities/Elements/Authentication/CreateToken/CreateToken';
import { Test } from '../../../Responsibilities/Elements/Test/Test';
import { ResponsibilitiesHolder } from '../../../Responsibilities/Holders/ResponsibilitiesHolder';

import { StrategiesHolder } from '../../holders/StrategiesHolder';
export class ReportActivityComment implements StrategiesHolder {
    private chaine!: ResponsibilitiesHolder;
    private req: any;
    private data: {
        request: any,
        elements: any,
        response: any

    };
    constructor(req: any) {
        this.req = req;
        this.data = {
            request: {

            },
            elements: {

            },
            response: {

            }
        };


        this.treatment();

        this.chaine = new TokenValidation(this.data);

        this.chaine
            /*.setNextChaine(CheckTime.getFactorie(this.data, 'general'))
            .setNextChaine(CheckTime.getFactorie(this.data, 'report'))*/
            .setNextChaine(FetchUserInfo.getFactorie(this.data, 'email'))
            .setNextChaine(ReportActivityResp.getFactorie(this.data, ['full', 'comment']))





    }

    public process(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.chaine != null) {
                this.chaine
                    .process()
                    .then((resp) => {
                        //resp true or false
                        if (resp) {
                            //if the response is true we resolve data

                            console.log(this.data);
                            resolve(this.data);
                        } else {
                            // if not some of resp fails
                            reject("some of respo fails");

                        }
                    })
                    .catch(err => {
                        //some of respo reject an error
                        reject(err);
                    });

            } else {
                console.log("no chaine is defined yet");
                /* this.data.response = {
                     ...this.data.response,
                     ...this.data.request,
                     ...this.data.elements
                 }*/
                //resolve(this.data);
                reject("no chaine is defined yet")
            }


        })
    };

    private treatment(): void {

        // the token is in
        // (this.data.request.headers.autorization).split(" ")[1]

        const bodey = this.req.body
        const headers = this.req.headers
        this.data.request = {
            ...this.data.request,
            bodey,
            headers
        }
        this.data.elements = {
            ...this.data.elements,
            reqtoken: (headers.authorization.split(" "))[1],
            email: this.data.request.bodey.email
        }
        //console.log(this.data);

    }


}