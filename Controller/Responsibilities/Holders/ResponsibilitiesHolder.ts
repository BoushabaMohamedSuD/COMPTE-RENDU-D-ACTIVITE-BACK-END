import { Processor } from './../../Processor';

export interface ResponsibilitiesHolder extends Processor {

    setNextChaine: (chaine: ResponsibilitiesHolder) => ResponsibilitiesHolder;
    process: () => Promise<any>;

}