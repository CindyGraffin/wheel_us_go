import { format } from "date-fns";
import React from "react";
import IUser from "../../../../../types/IUser";
import "./dashboardUserInformationModal.css";

export interface DashboardUserInformationModalProps {
    user?: IUser;
}

const DashboardUserInformationModal: React.FC<
    DashboardUserInformationModalProps
> = ({ user }) => {
    return (
        <div>
            {user && (
                <div>
                    <div className="img_container">
                        <img
                            src={user.userImg}
                            alt="profile utilisateur"
                            className="modal_user_img"
                        />
                    </div>
                    <div>
                        <div className="user_information_container">
                            <p className="information_title">
                                {user.firstname}&nbsp;{user.lastname}
                            </p>
                            <p className="information_mail">{user.email}</p>
                            <p>
                                Née le :&nbsp;
                                <span>
                                    {format(
                                        new Date(user.birthday as Date),
                                        "dd-MM-yyyy"
                                    )}
                                </span>
                            </p>
                            <p>Rôle : {user.role}</p>
                            <p>Ville : {user.city}</p>
                            <p>
                                inscrit depuis le :&nbsp;
                                <span>
                                    {format(
                                        new Date(user.createdAt as Date),
                                        "dd-MM-yyyy"
                                    )}
                                </span>
                            </p>
                        </div>
                        <div>TODO ACTIONS</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardUserInformationModal;
