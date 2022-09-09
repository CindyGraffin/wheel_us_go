import { GoLocation } from "../../../icons/index";
import "./viewRoomLocation.css";

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
                <span>Addresse:</span>
            </div>
            <p>{roomLocation}</p>
        </div>
    );
};

export default ViewRoomLocation;
