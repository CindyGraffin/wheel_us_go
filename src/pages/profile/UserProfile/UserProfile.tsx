import React from "react";
import "./userprofile.css";

export interface UserProfileProps {
    className?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ className = "" }) => {
    return (
        <div>
            <p>UserProfile</p>
        </div>
    );
};

export default UserProfile;
