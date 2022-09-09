import { useEffect, useRef, useState } from "react";
import IUser from "../../../../../types/IUser";
import ListPeopleInvited from "../ListPeopleInvited/ListPeopleInvited";

type SearchBarGuestProps = {
  friends: IUser[];
};

const SearchBarGuest: React.FC<SearchBarGuestProps> = ({ friends }) => {
  // On crée une copie de la liste d'amis
  const [listFriendsIdSelected, setListFriendsIdSelected] = useState<string[]>(
    []
  );
  const [filteredFriends, setFilteredFriends] = useState<IUser[]>([]);

  const [copyFriends, setCopyFriends] = useState<IUser[]>([]);

    const defaultOption = useRef<HTMLOptionElement>(null);

  const handleChangeSearchBarGuest = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    //TODO
    const friendSelected = (e.target as HTMLSelectElement).value;
    setListFriendsIdSelected([...listFriendsIdSelected, friendSelected]);
    const available = copyFriends.filter(
      (friend) => !listFriendsIdSelected.includes(friend._id!)
    );
    setCopyFriends(available);
  };

  useEffect(() => {
    const getSelected = () => {
      return copyFriends.filter((friend) =>
        listFriendsIdSelected.includes(friend._id!)
      );
    };
    setCopyFriends(friends);
    setFilteredFriends(getSelected);
    if(defaultOption.current)
      defaultOption.current.selected = true;
  }, [copyFriends, friends, listFriendsIdSelected]);

  return (
    <div className="select__container__searchbar">
      <select  defaultValue={undefined} onChange={handleChangeSearchBarGuest}>
        <option ref={defaultOption}>Rajouter un ami à la liste</option>
        {copyFriends.map((friend) => (
          <option key={friend._id} value={friend._id}>
            {friend.firstname + " " + friend.lastname}
          </option>
        ))}
      </select>
      <div>
        <h3>Personnes invitées</h3>
        <ListPeopleInvited listFriendsSelected={filteredFriends} />
      </div>
      <button
        onClick={() =>
          console.log({
            copyFriends,
            friends,
            filteredFriends,
            listFriendsIdSelected,
          })
        }
      >
        Debug
      </button>
    </div>
  );
};

export default SearchBarGuest;
