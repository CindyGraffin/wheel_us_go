import React from "react";
import IUser from "../../../../types/IUser";
import "./adminProfile.css";

export interface AdminProfileProps {
    user: IUser;
}

const AdminProfile: React.FC<AdminProfileProps> = ({ user }) => {
    return (
        <div className="profiles__container">
            <div>
                <div>
                    <img
                        src={user.userImg}
                        alt="visualisaton du profile de l'utilisateur"
                        className="profile_pic"
                    />
                </div>
            </div>

            <div className="information__container">
                <span className="information_title">
                    {user.firstname}&nbsp;
                    {user.lastname}
                </span>
                <span className="information_mail">{user.email}</span>
                <span className="information_role">{user.role}</span>
            </div>
        </div>
    );
};

export default AdminProfile;
