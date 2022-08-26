import { FriendsType } from "../../../../../types/Friends";

interface ListFriendsSelectedProps  {
  listFriendsSelected: FriendsType[];
  setListFriendsSelected: React.Dispatch<React.SetStateAction<FriendsType[]>>
}



const ListPeopleInvited : React.FC<ListFriendsSelectedProps> = ({listFriendSelected, setListFriendsSelected}) => {
  return <div className="people_invited">
    <ul>
      {listFriendSelected.map(listFriend=> console.log(listFriend))}
    </ul>
  </div>;
};

export default ListPeopleInvited;
