export class DB {
    private static Instance: DB;

    private database: string;
    private username: string;
    private password: string;
    private dialect: string;
    private host: string;

    private pool: {
        max: Number,
        min: Number,
        acquire: Number,
        idle: Number
    };



    private constructor() {
        this.database = 'CRA';
        this.username = 'Iot';
        this.password = 'Iot';
        this.dialect = "mysql";
        this.host = 'localhost';

        this.pool = {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        };


    }

    public getdatabase(): string {
        return this.database;
    }
    public getusername(): string {
        return this.username;
    }
    public getpassword(): string {
        return this.password;
    }
    public getdialect(): any {
        return this.dialect;
    }
    public gethost(): string {
        return this.host;
    }
    public getpool(): any {
        return this.pool;
    }



    public static getInstance(): DB {
        if (DB.Instance == null) {
            DB.Instance = new DB();
        }
        return DB.Instance;
    }
}