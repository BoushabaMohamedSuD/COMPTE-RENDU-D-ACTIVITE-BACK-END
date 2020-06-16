import { NullAbsence } from './../../../Factories/ReportActivity/ReportNull/NullAbsence';
import { NullPresence } from './../../../Factories/ReportActivity/ReportNull/NullPresence';
import { ReportComment } from './../../../Factories/ReportActivity/ReportComment';
import { ReportAbsence } from './../../../Factories/ReportActivity/ReportAbsence';
import { ReportPresence } from './../../../Factories/ReportActivity/ReportPresence';
import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';

export class ReportActivityResp {

    public static getFactorie(data: any, operation: any): ResponsibilitiesHolder {

        if (operation[0] == 'full') {

            if (operation[1] == 'presence') {
                return new ReportPresence(data);
            } else if (operation[1] == 'absence') {
                return new ReportAbsence(data);

            } else if (operation[1] == "comment") {
                return new ReportComment(data);

            }
        } else if (operation[0] = 'null') {
            if (operation[1] == 'presence') {
                return new NullPresence(data);
            } else if (operation[1] == 'absence') {
                return new NullAbsence(data);

            }

        }


        throw new Error('no Factory selected');

    }
}