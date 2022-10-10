import "./userFriends.css";
import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../components";
import { AuthContext } from "../../context/AuthContext";

import { userService } from "./UserService/userService";
import ContactFriends from "./ContactUserF/ContactFriends";
import { UFriends } from "../../types/UFriends";
import UserFriendsTitle from "../../components/userFirends/userFriendsTitle/UserFriendsTitle";

const UserFriends: React.FC<unknown> = () => {
    const { state } = useContext(AuthContext);

    const userId = state.user?._id;

    const [friends, setFriends] = useState<[] | UFriends[]>([]);
    useEffect(() => {
        const fetchUFriends = async () => {
            const response = await userService.getFriendsByUserId(userId!);
            setFriends(response.data.friendsId);
        };
        fetchUFriends();
    }, [userId]);

    return (
        <Layout>
            <div className="user_friends_container">
                <div>
                    <UserFriendsTitle titleText="Liste d'Amis" />
                    <ContactFriends friends={friends} />
                </div>
            </div>
        </Layout>
    );
};

export default UserFriends;
