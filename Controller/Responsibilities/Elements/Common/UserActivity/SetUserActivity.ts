import { SUA_FALSE_BCODE } from '../../../../Factories/SetUserActivity/SUA_FALSE_BCODE';
import { SUA_TRUE_BCODE } from '../../../../Factories/SetUserActivity/SUA_TRUE_BCODE';
import { SUA_FALSE_EMAIL } from '../../../../Factories/SetUserActivity/SUA_FALSE_EMAIL';
import { SUA_TRUE_EMAIL } from '../../../../Factories/SetUserActivity/SUA_TRUE_EMAIL';

import { ResponsibilitiesHolder } from '../../../Holders/ResponsibilitiesHolder';

export class SetUserActivity {

    public static getFactorie(data: any, operation: any[]): ResponsibilitiesHolder {

        if (operation[0] == 'email') {
            if (operation[1] == true) {
                return new SUA_TRUE_EMAIL(data);

            }
            return new SUA_FALSE_EMAIL(data);

        } else if (operation[0] == 'bcode') {
            if (operation[1] == true) {
                return new SUA_TRUE_BCODE(data);

            }
            return new SUA_FALSE_BCODE(data);

        }

        throw new Error('no Factory selected');

    }
}