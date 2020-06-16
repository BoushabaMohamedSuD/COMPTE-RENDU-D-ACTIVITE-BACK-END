import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';

export class ReportActivityResp {

    public static getFactorie(data: any, operation: any): ResponsibilitiesHolder {

        if (operation == 'presence') {

        } else if (operation == 'absence') {

        } else if (operation == "comment") {

        }

        throw new Error('no Factory selected');

    }
}