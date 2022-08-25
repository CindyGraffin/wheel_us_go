import IUser from "./User";

export default interface IAuthState {
    user: IUser | null;
    loading: boolean;
    error: boolean
}