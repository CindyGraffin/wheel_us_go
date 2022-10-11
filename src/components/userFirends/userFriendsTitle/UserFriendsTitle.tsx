import React from "react";
import { BsPeople } from "react-icons/bs";
import "./userFriendsTitle.css";

interface UserFriendsTitleProps {
    titleText: string;
}

const UserFriendsTitle: React.FC<UserFriendsTitleProps> = ({ titleText }) => {
    return (
        <div className="user-friends-title">
            <BsPeople className="user-friends-icon" />
            <div>
                <h1>{titleText}</h1>
            </div>
        </div>
    );
};

export default UserFriendsTitle;
