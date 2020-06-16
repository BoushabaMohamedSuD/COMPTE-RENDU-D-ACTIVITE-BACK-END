export class Emails {
    private static Instance: Emails;
    private source: string;
    private key: boolean;



    private constructor() {
        this.source = "erabteam@gmail.com";
        this.key = false;


    }

    public getSource(): string {
        return this.source
    }
    public getKey(): boolean {
        return this.key
    }





    public static getInstance(): Emails {
        if (Emails.Instance == null) {
            Emails.Instance = new Emails();
        }
        return Emails.Instance;
    }
}