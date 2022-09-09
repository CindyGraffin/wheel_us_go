import {RiShirtLine} from '../../../icons/index';
import './viewRoomDresscode.css'

interface ViewRoomDresscodeProps {
    dresscodeDescription: string
}

const ViewRoomDresscode: React.FC<ViewRoomDresscodeProps> = ({dresscodeDescription}) => {
    return (
        <div className="view-room-item">
            <div className="view-room-section">
                <RiShirtLine className='view-room-icon'/>
                <span>Dresscode:</span>
            </div>
            <p>{dresscodeDescription}</p>
        </div>
    );
};

export default ViewRoomDresscode;
