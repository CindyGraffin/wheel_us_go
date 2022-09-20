import { ChangeEventHandler, RefObject } from "react";
import IUser from "../../../../../types/IUser";
import ListPeopleInvited from "../ListPeopleInvited/ListPeopleInvited";


type SearchBarGuestProps = {
  friends: IUser[];
  friendsIdSelected: string[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

const SearchBarGuest: React.FC<SearchBarGuestProps> = ({
  friends,
  friendsIdSelected,
  onChange,
}) => {
  // On crée une copie de la liste d'amis
  const friendsAddedList = friends.filter((friend) =>
    friendsIdSelected.includes(friend._id!)
  );

  const friendsRemoveList = friends.filter(
    (friend) => !friendsIdSelected.includes(friend._id!)
  );

  return (
    <div className="select__container__searchbar">
      <select defaultValue={undefined} onChange={onChange}>
        <option>Rajouter un ami à la liste</option>
        {friendsRemoveList.map((friend) => (
          <option key={friend._id} value={friend._id}>
            {`${friend.firstname} ${friend.lastname}`}
          </option>
        ))}
      </select>
      <div>
        <h3>Personnes invitées</h3>
        <ListPeopleInvited listFriendsSelected={friendsAddedList} />
      </div>
    </div>
  );
};

export default SearchBarGuest;
