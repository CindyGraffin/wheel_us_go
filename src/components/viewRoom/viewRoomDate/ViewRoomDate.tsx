import {IoCalendarOutline} from '../../../icons/index';
import './viewRoomDate.css';

interface ViewRoomDateProps {
    roomDate: string;
}

const ViewRoomDate: React.FC<ViewRoomDateProps> = ({roomDate}) => {
    return (
        <div className="view-room-item">
            <div className="view-room-section">
            <IoCalendarOutline className='view-room-icon'/>
                <span>Date et heure:</span>
            </div>
            <p>{roomDate}</p>
        </div>
    );
};

export default ViewRoomDate;