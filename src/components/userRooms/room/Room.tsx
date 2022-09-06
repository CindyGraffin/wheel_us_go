import React from "react";
import { RoomDate } from "../roomDate/RoomDate";
import RoomIcon from "../roomIcon/RoomIcon";
import RoomTitle from "../roomTitle/RoomTitle";

interface RoomProps {
    roomTitle: string;
    roomTheme: string;
    roomDate: string
}

const Room: React.FC<RoomProps> = ({roomTitle, roomTheme, roomDate}) => {
    return (
        <div className="room">
            <RoomIcon roomTheme={roomTheme}/>
            <div>
                <RoomTitle roomTitle={roomTitle}/>
                <RoomDate roomDate={roomDate}/>
            </div>
        </div>
    );
};

export default Room;
