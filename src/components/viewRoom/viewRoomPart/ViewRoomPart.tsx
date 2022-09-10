import React from "react";
import './viewRoomPart.css';

interface ViewRoomPartProps {
    part: any;
}

const ViewRoomPart: React.FC<ViewRoomPartProps> = ({part}) => {
    return (
        <div>
            <div>
                <img className="view-room-part-picture" src={part.userImg} alt="" />
            </div>
            <div className="part-name">
                <p>{part.firstname}</p>
                <p>{part.lastname}</p>
            </div>
        </div>
    );
};

export default ViewRoomPart;
