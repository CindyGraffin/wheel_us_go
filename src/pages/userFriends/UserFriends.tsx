import "./userFriends.css";
import React, { useContext} from "react";
import { Layout } from "../../components";
import { AuthContext } from "../../context/AuthContext";

import ContactFriends from "./ContactUserF/ContactFriends";
import UserFriendsTitle from "../../components/userFirends/userFriendsTitle/UserFriendsTitle";
import useFetch from "../../hooks/useFetch";

const UserFriends: React.FC<unknown> = () => {
    const { state } = useContext(AuthContext);

    const userId = state.user?._id;

    const { data: friends, reFetch } = useFetch(`/friend/${userId}`);

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
