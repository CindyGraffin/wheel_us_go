import { AuthContext } from "../../../context/AuthContext";
import { RoomDate, RoomIcon, RoomTitle, CommonButton } from "../../index";
import { roomService } from "../../../services/roomService";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {AiOutlineEye, IoTrashBinOutline} from '../../../icons'
import "./room.css";
import { formattedTime } from "../../../utils/formatDate";

interface RoomProps {
    roomTitle: string;
    roomTheme: string;
    roomDate: Date;
    roomId: string;
    deleteRoom: boolean;
    setDeleteRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

const Room: React.FC<RoomProps> = ({ 
    deleteRoom, 
    setDeleteRoom, 
    roomTitle, 
    roomTheme, 
    roomDate, 
    roomId 
}) => {
    
    const navigate = useNavigate()
	const {state} = useContext(AuthContext);
    const userId = state.user!._id

    const deleteUserInRoom = async() => {
        await roomService.deleteUserInRoom(roomId, userId)
        setDeleteRoom(!deleteRoom)
    }
    const goToRoom = () => {
        navigate(`/viewroom/${roomId}`)
    }

    const formattedDate = formattedTime(new Date(roomDate))
    
    return (
        <div className="room">
            <div className="room-infos">
                <div className="room-icon">
                    <RoomIcon roomTheme={roomTheme} />
                </div>
                <div>
                    <RoomTitle roomTitle={roomTitle} />
                    <RoomDate roomDate={formattedDate} />
                </div>
            </div>
            <div className="room-btns">
                <CommonButton
                icon={<AiOutlineEye/>}
                    buttonText="Voir"
                    handleClick={goToRoom}
                />
                <CommonButton
                    icon={<IoTrashBinOutline/>}
                    buttonText="Quitter la salle"
                    handleClick={deleteUserInRoom}
                    classname='delete-btn'
                />
            </div>
        </div>
    );
};

export default Room;
