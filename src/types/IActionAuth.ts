import IUser from "./IUser";

export default interface IActionAuth {
    type: 'LOGIN_START' | 'LOGIN_SUCCESS' | 'LOGIN_FAILURE' | 'LOGOUT';
    payload: IUser;
}