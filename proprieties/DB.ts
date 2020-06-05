export class DB {
    private static Instance: DB;




    private constructor() {


    }





    public static getInstance(): DB {
        if (DB.Instance == null) {
            DB.Instance = new DB();
        }
        return DB.Instance;
    }
}