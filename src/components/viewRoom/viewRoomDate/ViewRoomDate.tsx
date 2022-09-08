import {IoCalendarOutline} from '../../../icons/index';

interface ViewRoomDateProps {
    roomDate: string;
}

const ViewRoomDate: React.FC<ViewRoomDateProps> = ({roomDate}) => {
    return (
        <div>
            <IoCalendarOutline/>
            <p>{roomDate}</p>
        </div>
    );
};

export default ViewRoomDate;