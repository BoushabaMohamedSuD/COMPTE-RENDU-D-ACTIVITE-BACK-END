import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';

export class FetchUserInfo {

    public static setFactorie(data: any, operation: any): ResponsibilitiesHolder {

        if (operation == 'email') {

        } else if (operation == 'bcode') {

        }
        throw new Error('no Factory selected');

    }
}