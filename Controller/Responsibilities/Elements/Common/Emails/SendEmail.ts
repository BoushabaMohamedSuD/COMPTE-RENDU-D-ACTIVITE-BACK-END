import { FelicitationEmail } from './../../../../Factories/Emails/FelicitationEmail';
import { FetchUserInfoBCode } from '../../../../Factories/FetchUserInfo/FetchUserInfoBCode';
import { FetchUserInfoEmail } from '../../../../Factories/FetchUserInfo/FetchUserInfoEmail';
import { ResponsibilitiesHolder } from '../../../Holders/ResponsibilitiesHolder';

export class SnedEmail {

    public static getFactorie(data: any, operation: any): ResponsibilitiesHolder {

        if (operation == 'felicitaion') {
            return new FelicitationEmail(data);
        }

        throw new Error('no Factory selected');

    }
}