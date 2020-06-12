import { VUA_USER_EMAIL } from './../../../../Factories/UserAuthority/VerifyUserAuthority/VUA_USER_EMAIL';
import { VUA_USER_BCODE } from './../../../../Factories/UserAuthority/VerifyUserAuthority/VUA_USER_BCODE';
import { VUA_ADMIN_EMAIL } from './../../../../Factories/UserAuthority/VerifyUserAuthority/VUA_ADMIN_EMAIL';
import { VUA_ADMIN_BCODE } from './../../../../Factories/UserAuthority/VerifyUserAuthority/VUA_ADMIN_BCODE';
import { SUA_FALSE_BCODE } from '../../../../Factories/SetUserActivity/SUA_FALSE_BCODE';
import { SUA_TRUE_BCODE } from '../../../../Factories/SetUserActivity/SUA_TRUE_BCODE';
import { SUA_FALSE_EMAIL } from '../../../../Factories/SetUserActivity/SUA_FALSE_EMAIL';
import { SUA_TRUE_EMAIL } from '../../../../Factories/SetUserActivity/SUA_TRUE_EMAIL';

import { ResponsibilitiesHolder } from '../../../Holders/ResponsibilitiesHolder';

export class VerifyUserAuthority {

    public static getFactorie(data: any, operation: any[]): ResponsibilitiesHolder {

        if (operation[0] == 'admin') {

            if (operation[1] == 'bcode') {

                return new VUA_ADMIN_BCODE(data);
            } else if (operation[1] == 'email') {
                return new VUA_ADMIN_EMAIL(data);

            }


        } else if (operation[0] == 'user') {

            if (operation[1] == 'bcode') {

                return new VUA_USER_BCODE(data);

            } else if (operation[1] == 'email') {

                return new VUA_USER_EMAIL(data);

            }

        }

        throw new Error('no Factory selected');

    }
}