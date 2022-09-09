import { useEffect, useState } from "react";
import IUser from "../../../../../types/IUser";
import ListPeopleInvited from "../ListPeopleInvited/ListPeopleInvited";

type SearchBarGuestProps = {
  friends: IUser[];
};

const SearchBarGuest: React.FC<SearchBarGuestProps> = ({ friends }) => {
  // On crée une copie de la liste d'amis
  const [listFriendsIdSelected, setListFriendsIdSelected] = useState<string[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<IUser[]>([])

  const copyFriends = [...friends]

  const handleChangeSearchBarGuest = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    //TODO
    const friendSelected = (e.target as HTMLSelectElement).value;
    if (!listFriendsIdSelected.includes(friendSelected)) {
      setListFriendsIdSelected([...listFriendsIdSelected, friendSelected]);
      
    } else {
      console.log("La valeur est déjà présente dans la liste");
    }
  };

  useEffect(()=>{
    const newFilter = copyFriends.filter((friend)=> listFriendsIdSelected.includes(friend._id!))
      setFilteredFriends(newFilter);
    
  }, [listFriendsIdSelected, friends, copyFriends])
  
  return (
    <div className="select__container__searchbar">
      <select defaultValue={undefined} onChange={handleChangeSearchBarGuest}>
        <option>Rajouter un ami à la liste</option>
        {copyFriends.map((friend) => (
          <option key={friend._id} value={friend._id}>
            {friend.firstname + " " + friend.lastname}
          </option>
        ))}
      </select>
      <div>
        <ListPeopleInvited listFriendsSelected = {filteredFriends}/>
      </div>
      <button onClick={()=> console.log(listFriendsIdSelected)}>Debug</button>
    </div>
  );
};

export default SearchBarGuest;
