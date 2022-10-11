import "./viewRoomLocation.css";
import { GoLocation } from "../../../icons/index";

interface ViewRoomLocationProps {
    roomLocation: string;
}

const ViewRoomLocation: React.FC<ViewRoomLocationProps> = ({
    roomLocation,
}) => {
    return (
        <div className="view-room-item">
            <div className="view-room-section">
                <GoLocation className="view-room-icon" />
                <p>Addresse:</p>
            </div>
            <p>{roomLocation}</p>
        </div>
    );
};

export default ViewRoomLocation;
