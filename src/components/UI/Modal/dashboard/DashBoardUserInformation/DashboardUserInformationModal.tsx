import { format } from "date-fns";
import React from "react";
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
                        <div className="actions_modal_container">
                            {user.isActive ? (
                                <div className="account_state">
                                    <p>
                                        Le compte de l'utilisateur&nbsp;
                                        {user.firstname}&nbsp;{user.lastname}
                                        &nbsp;est actif
                                    </p>
                                    <Button
                                        color="red"
                                        onClick={() => onClickBanUser(user._id)}
                                    >
                                        <p>Bannir</p>
                                    </Button>
                                </div>
                            ) : (
                                <div className="account_state">
                                    <p className="alert_text">
                                        Le compte de l'utilisateur&nbsp;
                                        {user.firstname}&nbsp;{user.lastname}
                                        &nbsp;est suspendu
                                    </p>
                                    <Button
                                        color="purple"
                                        onClick={() => onClickBanUser(user._id)}
                                        className="modal_button"
                                    >
                                        <p>Débannir</p>
                                    </Button>
                                </div>
                            )}
                            <div className="separator" />
                            <div>
                                <p>TODO SANCTIONS</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default DashboardUserInformationModal;
