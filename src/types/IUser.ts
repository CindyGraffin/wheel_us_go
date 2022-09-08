export default interface IUser {
  _id: string | undefined;
  firstname: string;
  lastname: string;
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
