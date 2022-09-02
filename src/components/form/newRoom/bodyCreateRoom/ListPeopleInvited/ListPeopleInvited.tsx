import { FriendsType } from "../../../../../types/Friends";

interface ListFriendsSelectedProps {
  listFriendsSelected: FriendsType[];
  setListFriendsSelected: React.Dispatch<React.SetStateAction<FriendsType[]>>;
}

const ListPeopleInvited: React.FC<ListFriendsSelectedProps> = ({
  listFriendsSelected,
  setListFriendsSelected,
}) => {
  return (
    <div className="people_invited">
      <ul>
        {/* {listFriendsSelected.map((listFriend) => <li>{listFriend}</li>)} */}
      </ul>
    </div>
  );
};

export default ListPeopleInvited;
