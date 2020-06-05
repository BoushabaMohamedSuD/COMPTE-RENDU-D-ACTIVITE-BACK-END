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
    },



    private constructor() {
        this.database = 'Iot';
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



    public static getInstance(): DB {
        if (DB.Instance == null) {
            DB.Instance = new DB();
        }
        return DB.Instance;
    }
}