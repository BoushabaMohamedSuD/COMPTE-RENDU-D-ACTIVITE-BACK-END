export class JWT {
    private static Instance: JWT;
    private password: string;
    private ExpTime: number;



    private constructor() {
        this.password = "craTestJwt";
        this.ExpTime = 60 * 60 * 24 * 12;
        //this.ExpTime = 10;

    }

    public getPassword(): string {
        return this.password
    }
    public getExpTime(): number {
        return this.ExpTime
    }





    public static getInstance(): JWT {
        if (JWT.Instance == null) {
            JWT.Instance = new JWT();
        }
        return JWT.Instance;
    }
}