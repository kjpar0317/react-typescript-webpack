declare module "login-interface" {
    export interface ILoginInfo {
        username: string;
        password: string;
        token: string;
        isLoading: boolean;
        error: any
    }
}
