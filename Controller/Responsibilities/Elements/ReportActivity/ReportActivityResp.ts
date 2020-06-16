import { ReportPresence } from './../../../Factories/ReportActivity/ReportPresence';
import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';

export class ReportActivityResp {

    public static getFactorie(data: any, operation: any): ResponsibilitiesHolder {

        if (operation == 'presence') {

        } else if (operation == 'absence') {
            return new ReportPresence(data);

        } else if (operation == "comment") {

        }

        throw new Error('no Factory selected');

    }
}