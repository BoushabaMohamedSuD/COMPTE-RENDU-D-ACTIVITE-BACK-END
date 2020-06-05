export class Port {
    private static Instance: Port;
    private port: any;



    private constructor() {
        this.port = 4000;

    }

    public setPort(port: Number) {
        this.port = port;

    }

    public getPort(): Number {
        return this.port;
    }




    public static getInstance(): Port {
        if (Port.Instance == null) {
            Port.Instance = new Port();
        }
        return Port.Instance;
    }
}