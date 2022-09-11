import ViewRoomUser from "../viewRoomPart/ViewRoomPart";
import './viewRoomParts.css';
import {BsPeople} from '../../../icons/index'
import IUser from "../../../types/IUser";

interface ViewRoomPartsProps {
	parts: IUser[];
}

const ViewRoomParts: React.FC<ViewRoomPartsProps> = ({ parts }) => {
	return (
		<div className="view-room-item">
			<div className="view-room-section">
                <BsPeople className='view-room-icon'/>
                <span>Participants:</span>
            </div>
			<div className="view-room-parts">
				{parts.map((part) => (
					<ViewRoomUser part={part} key={part._id} />
				))}
			</div>
		</div>
	);
};

export default ViewRoomParts;
