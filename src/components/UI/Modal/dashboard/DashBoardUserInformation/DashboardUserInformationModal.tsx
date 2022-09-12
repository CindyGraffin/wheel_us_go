import React from "react";
import IUser from "../../../../../types/IUser";
import "./dashboardUserInformationModal.css";

export interface DashboardUserInformationModalProps {
    user?: IUser;
    className?: string;
}

const DashboardUserInformationModal: React.FC<
    DashboardUserInformationModalProps
> = ({ user, className = "" }) => {
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
                        <div>
                            <p>
                                {user.firstname}&nbsp;{user.lastname}
                            </p>
                            <p>{user.email}</p>
                            <p>
                                Née le&nbsp;
                                <span>
                                    {new Date(user.birthday as Date).toString()}
                                </span>
                            </p>
                            <p>{user.role}</p>
                            <p>{user.city}</p>
                            <p>
                                inscrit depuis le{" "}
                                <span>
                                    {new Date(
                                        user.createdAt as Date
                                    ).toString()}
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
