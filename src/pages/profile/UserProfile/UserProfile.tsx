import { Badge, Layout, UserHeadband } from "../../../components/index";
import "./userprofile.css";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
    HiOutlineBadgeCheck,
} from "../../../icons/index";
import { Button } from "../../../components/UI";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { friendService } from "../../../services/friendService";
import { userService } from "../../../services/userService";
import IUser from "../../../types/IUser";
import { badges } from "../../../utils/badgeList";

const UserProfile: React.FC<unknown> = () => {
    const { userId } = useParams();
    const { data: user, reFetch } = useFetch(`/users/${userId}`);
    const { state } = useContext(AuthContext);


    const [isFriend, setIsFriend] = useState<boolean>();

    const verifyIfIsFriend = userService
        .getFriendsByUserId(state.user?._id as string)
        .then((res) => {
            setIsFriend(
                friendService.getIsFriend(res.data.friendsId, userId as string)
            );
        });

    const addFriend = async (
        userId: string,
        friendId: string
    ): Promise<void> => {
        await friendService.addFriend(userId, friendId);
        reFetch();
    };

    const removeFriend = async (
        userId: string,
        friendId: string
    ): Promise<void> => {
        await friendService.delete(userId, friendId);
        reFetch();
    };

    return (
        <Layout>
            <div className="profile__container">
                <div className="headband">
                    <UserHeadband user={user} />
                    <div>
                        {!isFriend ? (
                            <Button
                                onClick={() => {
                                    addFriend(
                                        state.user?._id as string,
                                        user._id
                                    );
                                }}
                            >
                                Ajouter ami
                            </Button>
                        ) : (
                            <Button
                                color="black_red"
                                onClick={() => {
                                    removeFriend(
                                        state.user?._id as string,
                                        user._id
                                    );
                                }}
                            >
                                Supprimer ami
                            </Button>
                        )}
                    </div>
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
