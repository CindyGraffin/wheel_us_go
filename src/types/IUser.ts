export default interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    birthday?: Date;
    password: string | undefined;
    city: string;
    userImg?: string;
    outingPart: number;
    outingCre: number;
    // Types.ObjectId à vérifier
    tablesPartId?: string[];
    friendsId?: string[];
    groupsId?: string[];
}

