import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { roomService } from "../../../services/roomService";
import RoomButton from "../roomButton/RoomButton";
import { RoomDate } from "../roomDate/RoomDate";
import RoomIcon from "../roomIcon/RoomIcon";
import RoomTitle from "../roomTitle/RoomTitle";
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
	const {state} = useContext(AuthContext);
    const deleteUserInRoom = async() => {
        console.log(roomId);
        console.log(state.user!._id);
        await roomService.deleteUserInRoom(roomId, state.user!._id)
        setDeleteRoom(!deleteRoom)
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
                <RoomButton
                    buttonText="Voir"
                    handleClick={() => console.log("voir")}
                />
                <RoomButton
                    buttonText="Supprimer"
                    handleClick={deleteUserInRoom}
                />
            </div>
        </div>
    );
};

export default Room;
