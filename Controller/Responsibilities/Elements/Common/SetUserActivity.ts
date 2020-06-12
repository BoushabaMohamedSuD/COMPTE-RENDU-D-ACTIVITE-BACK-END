
import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';

export class SetUserActivity {

    public static getFactorie(data: any, operation: any): ResponsibilitiesHolder {

        if (operation == 'true') {

        } else if (operation == 'false') {

        }

        throw new Error('no Factory selected');

    }
}