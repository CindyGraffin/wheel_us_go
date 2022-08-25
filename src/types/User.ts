export default interface User {
    firstName: string;
    lastName: string;
    mail: string;
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

