import "./profilePage.css";
import {
    HiOutlineBadgeCheck,
} from "../../../icons/index";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Badge, Layout, UserHeadband } from "../../../components";
import { badges } from "../../../utils/badgeList";

const ProfilePage: React.FC<unknown> = () => {

    const { state } = useContext(AuthContext);

    return (
        <Layout>
            <div className="profile__container">
                <div className="headband">
                    <UserHeadband user={state.user} />
                   
                    <div className="badges__container">
                        <div className="badges-title">
                            <HiOutlineBadgeCheck className="badge-icon" />
                            <p>MES BADGES</p>
                        </div>
                        <div className="badges">
                            {badges.map((badge, i) => {
                                return (
                                    <Badge
                                        key={i}
                                        badgeText={badge.badgeText}
                                        icon={badge.icon}
                                        classname={badge.classname!}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;
