import IUser from "../../../../../types/IUser";

interface ListFriendsSelectedProps {
    listFriendsSelected: IUser[];
}

const ListPeopleInvited: React.FC<ListFriendsSelectedProps> = ({
    listFriendsSelected,
}) => {
    return (
        <div className="people_invited">
            <ul>
                {listFriendsSelected.map((listFriend) => (
                    <li key={listFriend._id}>
                        {listFriend.lastname + " " + listFriend.firstname}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListPeopleInvited;
