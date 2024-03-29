import IUser from "../../../../types/IUser";
import './listPeopleInvited.css';
import {RiCloseCircleFill} from '../../../../icons/index';

interface ListFriendsSelectedProps {
	listFriendsSelected: IUser[];
    handleDeletePart: (friendId: string) => void;
}

const ListPeopleInvited: React.FC<ListFriendsSelectedProps> = ({
	listFriendsSelected,
    handleDeletePart
}) => {
	return (
		<div className="people_invited">
			{listFriendsSelected.map((friend) => (
				<div className="friend-selected" key={friend._id}>
                    <div className="friend-selected-img">
                        <img src={friend.userImg} alt="" />
                    </div>
                    <div className="friend-selected-name">
                        <p>{friend.lastname + " " + friend.firstname}</p>
                    </div>
                    <div className="friend-selected-delete">
                        <button onClick={() => handleDeletePart(friend!._id)}>
                            <RiCloseCircleFill className="friend-selected-delete-icon"/>
                        </button>
                    </div>
				</div> 
			))}
		</div>
	);
};

export default ListPeopleInvited;
