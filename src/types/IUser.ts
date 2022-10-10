export default interface IUser {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    birthday?: Date;
    password: string | undefined;
    city: string;
    isActive?: boolean;
    userImg?: string;
    outingPart: number;
    outingCre: number;
    role: string;
    tablesPartId?: string[];
    friendsId?: string[];
    groupsId?: string[];
    createdAt?: Date;
    reportingsId?: string[];
}
