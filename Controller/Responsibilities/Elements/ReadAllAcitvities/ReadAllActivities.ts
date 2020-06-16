import { ReadComments } from './../../../Factories/ReadAllActivites/ReadComment';
import { ReadAbsence } from './../../../Factories/ReadAllActivites/ReadAbsence';
import { ReadPresence } from './../../../Factories/ReadAllActivites/ReadPresence';
import { NullAbsence } from './../../../Factories/ReportActivity/ReportNull/NullAbsence';
import { NullPresence } from './../../../Factories/ReportActivity/ReportNull/NullPresence';
import { ReportComment } from './../../../Factories/ReportActivity/ReportComment';
import { ReportAbsence } from './../../../Factories/ReportActivity/ReportAbsence';
import { ReportPresence } from './../../../Factories/ReportActivity/ReportPresence';
import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';

export class ReadAllActivities {

    public static getFactorie(data: any, operation: any): ResponsibilitiesHolder {

        if (operation == 'presence') {
            return new ReadPresence(data);

        } else if (operation == 'absence') {
            return new ReadAbsence(data);

        } else if (operation == 'comment') {
            return new ReadComments(data);

        }


        throw new Error('no Factory selected');

    }
}