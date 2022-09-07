import React from "react";
import RoomButton from "../roomButton/RoomButton";
import { RoomDate } from "../roomDate/RoomDate";
import RoomIcon from "../roomIcon/RoomIcon";
import RoomTitle from "../roomTitle/RoomTitle";
import "./room.css";

interface RoomProps {
    roomTitle: string;
    roomTheme: string;
    roomDate: string;
}

const Room: React.FC<RoomProps> = ({ roomTitle, roomTheme, roomDate }) => {
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
                    onClick={() => console.log("voir")}
                />
                <RoomButton
                    buttonText="Supprimer"
                    onClick={() => console.log("supprimer")}
                />
            </div>
        </div>
    );
};

export default Room;
