export default interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    birthday?: Date;
    password: string | undefined;
    city: string;
    userImg?: string;
    outingPart: number;
    outingCre: number;
    tablesPartId?: string[];
    friendsId?: string[];
    groupsId?: string[];
}

