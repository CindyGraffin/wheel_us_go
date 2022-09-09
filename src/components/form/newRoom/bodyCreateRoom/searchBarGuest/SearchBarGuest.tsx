import { useEffect, useRef, useState } from "react";
import IUser from "../../../../../types/IUser";
import ListPeopleInvited from "../ListPeopleInvited/ListPeopleInvited";

type SearchBarGuestProps = {
    friends: IUser[];
};

const SearchBarGuest: React.FC<SearchBarGuestProps> = ({ friends }) => {
    // On crée une copie de la liste d'amis
    const [friendsIdSelected, setFriendsIdSelected] = useState<string[]>([]);
    const [copyFriends, setCopyFriends] = useState<IUser[]>([]);

    const defaultOption = useRef<HTMLOptionElement>(null);

    const handleChangeSearchBarGuest = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        //TODO
		const friendSelected = (e.target as HTMLSelectElement).value;
        setFriendsIdSelected([...friendsIdSelected, friendSelected]);
    };

	useEffect(() => {
		setCopyFriends(friends)

		console.log(copyFriends);
	}, [friends])

	const friendsAddedList = copyFriends.filter((friend) =>
        friendsIdSelected.includes(friend._id!)
	)

	const friendsRemoveList = copyFriends.filter((friend) =>
		!friendsIdSelected.includes(friend._id!)
	)

    return (
        <div className="select__container__searchbar">
            <select
                defaultValue={undefined}
                onChange={handleChangeSearchBarGuest}
            >
                <option ref={defaultOption}>Rajouter un ami à la liste</option>
                {friendsRemoveList.map((friend) => (
                    <option key={friend._id} value={friend._id}>
                        {friend.firstname + " " + friend.lastname}
                    </option>
                ))}
            </select>
            <div>
                <h3>Personnes invitées</h3>
                <ListPeopleInvited listFriendsSelected={friendsAddedList} />
            </div>
            <button
                onClick={() =>
                    console.log({
                        copyFriends,
                        friends,
                        friendsIdSelected,
                    })
                }
            >
                Debug
            </button>
        </div>
    );
};

export default SearchBarGuest;
