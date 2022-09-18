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
            {dresscodeDescription === undefined ? (
                    <p>Aucun dresscode défini.</p>
                ) : (
                    <p>{dresscodeDescription}</p>
                )}
        </div>
    );
};

export default ViewRoomDresscode;
