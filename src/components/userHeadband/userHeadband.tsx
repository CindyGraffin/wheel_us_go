
import './userHeaband.css';
import {GoLocation} from '../../icons/index'
import IUser from '../../types/IUser';

interface UserHeadbandProps {
	user: IUser | null;
}

const UserHeadband: React.FC<UserHeadbandProps> = ({user}) => {
	return (
		<div className="headband__container">
			<div className="headband-img">
				<img src={user?.userImg} alt="visage de l'utilisateur" />
			</div>
			<div className="headband-infos">
				<div className="headband-name">
					<p>{user?.firstName}</p>
					<p>{user?.lastName}</p>
				</div>
				<div className="headband-location">
					<GoLocation/>
					<p>{user?.city}</p>
				</div>

			</div>
		</div>
	)
};

export default UserHeadband;
