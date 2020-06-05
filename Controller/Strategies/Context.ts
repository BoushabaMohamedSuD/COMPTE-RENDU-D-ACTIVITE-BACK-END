import { StrategiesHolder } from './Holders/StrategiesHolder';


export class Context {
    private strategy!: StrategiesHolder;
    constructor(strategy: StrategiesHolder) {
        this.strategy = strategy;
    }

    public process(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.strategy.process()
                .then((data: any) => {
                    if (data != null) {
                        resolve(data);
                    } else {
                        reject("data is null")
                    }

                })
                .catch((err) => {
                    reject(err);
                });



        });
    }
}