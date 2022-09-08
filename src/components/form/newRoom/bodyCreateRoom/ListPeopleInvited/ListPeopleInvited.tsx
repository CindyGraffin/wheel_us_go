import IUser from "../../../../../types/IUser";


interface ListFriendsSelectedProps {
  listFriendsSelected: IUser[];
  setListFriendsSelected: React.Dispatch<React.SetStateAction<[]>>;
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
