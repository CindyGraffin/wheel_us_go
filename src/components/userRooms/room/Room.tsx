import { AuthContext } from "../../../context/AuthContext";
import { RoomDate, RoomIcon, RoomTitle, CommonButton } from "../../index";
import { roomService } from "../../../services/roomService";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./room.css";

interface RoomProps {
    roomTitle: string;
    roomTheme: string;
    roomDate: string;
    roomId: string;
    deleteRoom: boolean;
    setDeleteRoom: any;
}

const Room: React.FC<RoomProps> = ({ deleteRoom, setDeleteRoom, roomTitle, roomTheme, roomDate, roomId }) => {
    
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
    return (
        <div className="room">
            <div className="room-infos">
                <div className="room-icon">
                    <RoomIcon roomTheme={roomTheme} />
                </div>
                <div>
                    <RoomTitle roomTitle={roomTitle} />
                    <RoomDate roomDate={roomDate} />
                </div>
            </div>
            <div className="room-btns">
                <CommonButton
                    buttonText="Voir"
                    handleClick={goToRoom}
                />
                <CommonButton
                    buttonText="Quitter la salle"
                    handleClick={deleteUserInRoom}
                />
            </div>
        </div>
    );
};

export default Room;
