declare module 'login-interface' {
    export interface ILoginInfo {
        username: string;
        password: string;
        token: string;
        tokenType: string;
        isLoading: boolean;
        error: any;
    }
}
