import { NullAbsence } from './../../../Factories/ReportActivity/ReportNull/NullAbsence';
import { NullPresence } from './../../../Factories/ReportActivity/ReportNull/NullPresence';
import { ReportComment } from './../../../Factories/ReportActivity/ReportComment';
import { ReportAbsence } from './../../../Factories/ReportActivity/ReportAbsence';
import { ReportPresence } from './../../../Factories/ReportActivity/ReportPresence';
import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';

export class ReadAllActivities {

    public static getFactorie(data: any, operation: any): ResponsibilitiesHolder {

        if (operation == 'presence') {


        } else if (operation[0] = 'absence') {


        } else if (operation[0] = 'comment') {


        }


        throw new Error('no Factory selected');

    }
}