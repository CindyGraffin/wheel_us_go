import { ChangeEventHandler } from "react";
import IUser from "../../../../types/IUser";
import './searchBarGuest.css';

interface SearchBarGuestProps {
	friendsRemoveList: IUser[];
	onChange: ChangeEventHandler<HTMLSelectElement>;
	nameField: any;
}

const SearchBarGuest: React.FC<SearchBarGuestProps> = ({
	friendsRemoveList,
	onChange,
}) => {
		return (
		<div className="search-bar-guest category-infos">
			<select defaultValue={"Choisissez un ami"} onChange={(e) => onChange(e)}>
				<option>Choisissez un ami</option>
				{friendsRemoveList.map((friend) => (
					<option key={friend._id} value={friend._id}>
						{`${friend.firstname} ${friend.lastname}`}
					</option>
				))}
			</select>
		</div>
	);
};

export default SearchBarGuest;
