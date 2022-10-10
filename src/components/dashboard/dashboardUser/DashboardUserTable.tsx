import React, { useState } from "react";

import { userService } from "../../../services/userService";
import { Button } from "../../UI";
import DashboardUserInformationModal from "../../UI/Modal/dashboard/DashBoardUserInformation/DashboardUserInformationModal";
import IUser from "../../../types/IUser";

import { FiAlertTriangle } from "react-icons/fi";
import { IoAlertOutline, IoEyeOutline } from "react-icons/io5";
import "./dashboardUserTable.css";


export interface DashboardUserTableProps {
    users: IUser[];
    refetchData: () => Promise<void>;
}

const DashboardUserTable: React.FC<DashboardUserTableProps> = ({
    users,
    refetchData,
}) => {
    const [showModalUserInformation, setShowModalUserInformation] =
        useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<IUser>();
    const onClickSeeUser = (user: IUser): void => {
        setSelectedUser(user);
        setShowModalUserInformation(true);
    };

    const onClickBanUser = async (userId: string): Promise<void> => {
        await userService.banUserById(userId);

        refetchData();
    };

    return (
        <>
            <div>
                <div className="grid_header">
                    <div className="grid_header_name grid_name">Nom</div>
                    <div className="grid_header_email grid_email">Email</div>
                    <div className="grid_header_role grid_role">Rôle</div>
                    <div className="grid_header_actions grid_actions">
                        Actions
                    </div>
                </div>
                <div className="grid_content">
                    {users
                        .sort((a, b) => {
                            if (a.lastname < b.lastname) {
                                return -1;
                            }
                            if (a.lastname > b.lastname) {
                                return 1;
                            }
                            return 0;
                        })
                        .map((user, key) => (
                            <div key={key} className="grid_items">
                                <div className="grid_img">
                                    <img
                                        src={user.userImg}
                                        alt="profile utilisateur"
                                        className="dashboard_user_img"
                                    />
                                </div>
                                <div className="grid_name">
                                    {user.firstname}&nbsp;{user.lastname}
                                </div>
                                <div className="grid_email">{user.email}</div>
                                <div className="grid_role">{user.role}</div>
                                <div className="grid_alert">
                                    {!user.isActive && (
                                        <div className="alert_icons_container">
                                            <FiAlertTriangle className="alert_icons" />
                                        </div>
                                    )}
                                    {user.reportingsId &&
                                        user.reportingsId.length > 0 &&
                                        user.isActive && (
                                            <div className="test">
                                                <IoAlertOutline className="alert_icons" />
                                                <p className="report_notification">
                                                    {user.reportingsId.length}
                                                </p>
                                            </div>
                                        )}
                                </div>
                                <div className="grid_actions actions__container">
                                    <button
                                        type="button"
                                        className="see_more_button"
                                        onClick={() => {
                                            onClickSeeUser(user);
                                        }}
                                    >
                                        <IoEyeOutline className="see_more_icon" />
                                    </button>
                                    {user.role !== "admin" && (
                                        <div>
                                            {user.isActive ? (
                                                <Button
                                                    color="red"
                                                    onClick={() =>
                                                        onClickBanUser(user._id)
                                                    }
                                                >
                                                    <p>Bannir</p>
                                                </Button>
                                            ) : (
                                                <Button
                                                    color="purple"
                                                    onClick={() =>
                                                        onClickBanUser(user._id)
                                                    }
                                                >
                                                    <p>Débannir</p>
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            {showModalUserInformation && (
                <DashboardUserInformationModal
                    user={selectedUser}
                    open={showModalUserInformation}
                    setOpen={setShowModalUserInformation}
                    refetchData={refetchData}
                />
            )}
        </>
    );
};

export default DashboardUserTable;
