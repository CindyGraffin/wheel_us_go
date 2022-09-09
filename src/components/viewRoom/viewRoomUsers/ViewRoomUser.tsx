import React from "react";
import './viewRoomUser.css';

interface ViewRoomUserProps {
    user: any;
}

const ViewRoomUser: React.FC<ViewRoomUserProps> = ({user}) => {
    return (
        <div>
            <div>
                <img className="view-room-part-picture" src={user.userImg} alt="" />
            </div>
            <p>{user.firstname}</p>
            <p>{user.lastname}</p>
        </div>
    );
};

export default ViewRoomUser;
