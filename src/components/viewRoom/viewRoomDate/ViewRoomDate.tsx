import {IoCalendarOutline} from '../../../icons/index';
import { formattedTime } from '../../../utils/formatDate';
import './viewRoomDate.css';

interface ViewRoomDateProps {
    roomDate: string;
}

const ViewRoomDate: React.FC<ViewRoomDateProps> = ({roomDate}) => {
    const formattedDate = formattedTime(new Date(roomDate))
    return (
        <div className="view-room-item">
            <div className="view-room-section">
            <IoCalendarOutline className='view-room-icon'/>
                <span>Date et heure:</span>
            </div>
            <p>{formattedDate}</p>
        </div>
    );
};

export default ViewRoomDate;