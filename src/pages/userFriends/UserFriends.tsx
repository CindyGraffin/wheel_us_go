import "./userFriends.css";
import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../components";
import { AuthContext } from "../../context/AuthContext";

import { userService } from "./UserService/userService";
import ContactFriends from "./ContactUserF/ContactFriends";
import { UFriends } from "../../types/UFriends";
import UserFriendsTitle from "../../components/userFirends/userFriendsTitle/UserFriendsTitle";
import useFetch from "../../hooks/useFetch";

const UserFriends: React.FC<unknown> = () => {
    const { state } = useContext(AuthContext);

    const userId = state.user?._id;

    const { data: friends, reFetch } = useFetch(`/friend/${userId}`);
    console.log(friends.friendsId);

    // const [friends, setFriends] = useState<[] | UFriends[]>([]);
    // useEffect(() => {
    //     const fetchUFriends = async () => {
    //         const response = await userService.getFriendsByUserId(userId!);
    //         setFriends(response.data.friendsId);
    //     };
    //     fetchUFriends();
    // }, [userId]);

    return (
        <Layout>
            <div className="user_friends_container">
                <div>
                    <UserFriendsTitle titleText="LISTE D'AMIS" />
                    <ContactFriends
                        friends={friends.friendsId}
                        userId={userId as string}
                        reFetch={reFetch}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default UserFriends;
