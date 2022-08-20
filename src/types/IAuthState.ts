import IUser from "./IUser";

export default interface IAuthState {
    user: IUser | null;
    loading: boolean;
    error: boolean
}