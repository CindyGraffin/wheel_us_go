import { format } from "date-fns";
import React from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../../../../../hooks/useFetch";
import { userService } from "../../../../../services/userService";
import IUser from "../../../../../types/IUser";
import Button from "../../../Button/Button";
import Modal from "../../Modal";
import "./dashboardUserInformationModal.css";

export interface DashboardUserInformationModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    user?: IUser;
    refetchData: () => Promise<void>;
}

const DashboardUserInformationModal: React.FC<
    DashboardUserInformationModalProps
> = ({ user, open, setOpen, refetchData }) => {
    const { data: reports } = useFetch(`/users/report/${user?._id}`);

    const onClickBanUser = async (userId: string): Promise<void> => {
        await userService.banUserById(userId);
        refetchData();
        setOpen(false);
    };

    return (
        <Modal show={open} setShow={setOpen}>
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
                            {user && user.birthday && (
                                <p>
                                    Née le :&nbsp;
                                    <span>
                                        {format(
                                            new Date(user.birthday),
                                            "dd-MM-yyyy"
                                        )}
                                    </span>
                                </p>
                            )}
                            <p>Rôle : {user.role}</p>
                            <p>Ville : {user.city}</p>
                            {user && user.createdAt && (
                                <p>
                                    inscrit depuis le :&nbsp;
                                    <span>
                                        {format(
                                            new Date(user.createdAt as Date),
                                            "dd-MM-yyyy"
                                        )}
                                    </span>
                                </p>
                            )}
                        </div>
                        {user.role !== "admin" && (
                            <div className="actions_modal_container">
                                {user.isActive ? (
                                    <div className="account_state">
                                        <p>
                                            Le compte de l'utilisateur&nbsp;
                                            {user.firstname}&nbsp;
                                            {user.lastname}
                                            &nbsp;est actif
                                        </p>

                                        <Button
                                            color="red"
                                            onClick={() =>
                                                onClickBanUser(user._id)
                                            }
                                        >
                                            <p>Bannir</p>
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="account_state">
                                        <p className="alert_text">
                                            Le compte de l'utilisateur&nbsp;
                                            {user.firstname}&nbsp;
                                            {user.lastname}
                                            &nbsp;est suspendu
                                        </p>
                                        <Button
                                            color="purple"
                                            onClick={() =>
                                                onClickBanUser(user._id)
                                            }
                                            className="modal_button"
                                        >
                                            <p>Débannir</p>
                                        </Button>
                                    </div>
                                )}
                                <div className="separator" />
                                <div className="report__container">
                                    {reports && reports.length > 0 ? (
                                        <div>
                                            <p className="report_title">
                                                {reports.length > 1
                                                    ? "Signalements"
                                                    : "Signalement"}
                                            </p>
                                            <div className="report_list">
                                                {/* je sais un any est pas top mais le vrai type est bof je verrai avec benoit si il y a mieux */}
                                                {reports.map(
                                                    (report: any, key: any) => (
                                                        <NavLink
                                                            to={`/dashboard/reports/${report._id}`}
                                                            key={key}
                                                            className="report_list_item"
                                                        >
                                                            <p className="report_name">
                                                                {
                                                                    report.category
                                                                }
                                                            </p>
                                                            <p>
                                                                {format(
                                                                    new Date(
                                                                        report.createdAt as Date
                                                                    ),
                                                                    "dd-MM-yyyy"
                                                                )}
                                                            </p>
                                                        </NavLink>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="report_title">
                                            L'utilistaeur n'a pas reçu de
                                            signalement
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default DashboardUserInformationModal;
