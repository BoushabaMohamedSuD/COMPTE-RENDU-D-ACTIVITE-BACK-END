import { Processor } from './../../Processor';
export interface StrategiesHolder extends Processor {
    process: () => Promise<any>;

}