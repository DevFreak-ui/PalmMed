export interface IUser {
    id: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstname?: string;
    lastname?: string;
    avatar?: string;
    token?: string;
    tokenExpiration?: number;
}