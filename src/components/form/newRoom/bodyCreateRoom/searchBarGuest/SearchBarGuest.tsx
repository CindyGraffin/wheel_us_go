import { FriendsType } from "../../../../../types/Friends";

type SearchBarGuestProps = {
  friends: FriendsType[];
  setFriends: React.Dispatch<React.SetStateAction<FriendsType[]>>
}



const SearchBarGuest : React.FC<SearchBarGuestProps> = ({friends, setFriends}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const handleChangeSearchBarGuest  = (e : React.ChangeEvent<HTMLSelectElement>): void  => {
    //TODO
  };
  let listFriends = [...friends]
  return (
    <div className="select__container__searchbar">
      <select onChange={handleChangeSearchBarGuest}>
        {listFriends.map((friend) => (
          <option key={friend.pseudo} value={friend.pseudo}>
            {friend.pseudo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBarGuest;
