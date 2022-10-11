import { Badge, Layout, UserHeadband } from "../../../components/index";
import "./userprofile.css";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
    HiOutlineBadgeCheck,
} from "../../../icons/index";
import { badges } from "../../../utils/badgeList";

const UserProfile: React.FC<unknown> = () => {
    const { userId } = useParams();
    const { data: user } = useFetch(`/users/${userId}`);

    return (
        <Layout>
            <div className="profile__container">
                <div className="headband">
                    <UserHeadband user={user} />
                    <div className="badges__container">
                        <div className="badges-title">
                            <HiOutlineBadgeCheck className="badge-icon" />
                            <p>SES BADGES</p>
                        </div>
                        <div className="badges">
                            {badges.map((badge, key) => {
                                return (
                                    <Badge
                                        key={key}
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

export default UserProfile;
