import IUser from "./User";

export default interface IActionAuth {
    type: 'LOGIN_START' | 'LOGIN_SUCCESS' | 'LOGIN_FAILURE' | 'LOGOUT';
    payload: IUser | null;
}