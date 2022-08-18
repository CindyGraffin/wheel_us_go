import IUser from "./IUser";

export default interface IAction {
    type: string;
    payload: IUser;
}