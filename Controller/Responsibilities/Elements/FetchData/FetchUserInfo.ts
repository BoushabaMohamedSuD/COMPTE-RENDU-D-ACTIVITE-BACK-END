import { FetchUserInfoBCode } from './../../../Factories/FetchUserInfo/FetchUserInfoBCode';
import { FetchUserInfoEmail } from './../../../Factories/FetchUserInfo/FetchUserInfoEmail';
import { ResponsibilitiesHolder } from './../../Holders/ResponsibilitiesHolder';

export class FetchUserInfo {

    public static getFactorie(data: any, operation: any): ResponsibilitiesHolder {

        if (operation == 'email') {
            return new FetchUserInfoEmail(data);
        } else if (operation == 'bcode') {
            return new FetchUserInfoBCode(data);
        }

        throw new Error('no Factory selected');

    }
}