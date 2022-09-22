import React from "react";
import IUser from "../../../../types/IUser";
import { formattedDate } from "../../../../utils/formatDate";
import Card from "../../../UI/dashboard/Card/Card";
import "./userProfile.css";

export interface UserProfileProps {
    user: IUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <Card className="user_profil_container">
            <div>
                <img
                    src={user.userImg}
                    alt="visualisaton du profile de l'utilisateur"
                    className="user_profil_pic"
                />
            </div>
            <div className="information_profil_container">
                <span className="user_information_title">
                    {user.firstname}&nbsp;
                    {user.lastname}
                </span>
                <div className="user_informations">
                    <span>{user.email}</span>
                    <span>{user.city}</span>
                    {user && user.birthday && (
                        <span>
                            née le :&nbsp;
                            {formattedDate(new Date(user.birthday), "-")}
                        </span>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default UserProfile;
