import { SUA_FALSE_BCODE } from '../../../../Factories/SetUserActivity/SUA_FALSE_BCODE';
import { SUA_TRUE_BCODE } from '../../../../Factories/SetUserActivity/SUA_TRUE_BCODE';
import { SUA_FALSE_EMAIL } from '../../../../Factories/SetUserActivity/SUA_FALSE_EMAIL';
import { SUA_TRUE_EMAIL } from '../../../../Factories/SetUserActivity/SUA_TRUE_EMAIL';

import { ResponsibilitiesHolder } from '../../../Holders/ResponsibilitiesHolder';

export class VerifyUserAuthority {

    public static getFactorie(data: any, operation: any[]): ResponsibilitiesHolder {

        if (operation[0] == 'admin') {


        } else if (operation[0] == 'user') {

        }

        throw new Error('no Factory selected');

    }
}