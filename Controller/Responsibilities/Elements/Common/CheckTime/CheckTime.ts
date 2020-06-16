import { GeneralTime } from './../../../../Factories/CheckTime/GeneralTime';
import { ReportTime } from './../../../../Factories/CheckTime/ReportTime';
import { ResponsibilitiesHolder } from './../../../Holders/ResponsibilitiesHolder';

export class CheckTime {

    public static getFactorie(data: any, operation: any): ResponsibilitiesHolder {

        if (operation == 'general') {
            return new ReportTime(data);
        } else if (operation == 'report') {
            return new GeneralTime(data);
        }

        throw new Error('no Factory selected');

    }
}