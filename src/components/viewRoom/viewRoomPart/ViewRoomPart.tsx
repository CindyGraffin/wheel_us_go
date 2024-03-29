import IUser from "../../../types/IUser";
import './viewRoomPart.css';

interface ViewRoomPartProps {
    part: IUser;
}

const ViewRoomPart: React.FC<ViewRoomPartProps> = ({part}) => {
    return (
        <div className="view-room-part">
            <div>
                <img className="view-room-part-picture" src={part.userImg} alt="utilistaeur participant à la salle actuelle" />
            </div>
            <div className="part-name">
                <p>{part.firstname}</p>
                <p>{part.lastname}</p>
            </div>
        </div>
    );
};

export default ViewRoomPart;
