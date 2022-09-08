import { useState } from "react";
import IUser from "../../../../../types/IUser";

type SearchBarGuestProps = {
  friends: IUser[];
};

type SearchBarSelectedFriendListType = {
  list: string[];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [listFriendsSelected, setListFriendsSelected] = useState<SearchBarSelectedFriendListType[]>([]);
const SearchBarGuest: React.FC<SearchBarGuestProps> = ({ friends }) => {

  const handleChangeSearchBarGuest = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    //TODO
    setListFriendsSelected(e.target.value);
  };
  let listFriends = [...friends];
  return (
    <div className="select__container__searchbar">
      <select defaultValue={undefined} onChange={handleChangeSearchBarGuest}>
        <option>Rajouter un ami à la liste</option>
        {listFriends.map((friend) => (
          <option
            key={friend._id}
            value={friend.firstname + " " + friend.lastname}
          >
            {friend.firstname + " " + friend.lastname}
          </option>
        ))}
      </select>
      <div>
         {/* //TODO */}
      </div>
    </div>
  );
};

export default SearchBarGuest;
