import { ResponsibilitiesHolder } from './ResponsibilitiesHolder';
import { Processor } from './../../Processor';

export interface SubRespoHolder extends ResponsibilitiesHolder {

    setNextChaine: (chaine: SubRespoHolder) => SubRespoHolder;
    process: () => Promise<any>;

}