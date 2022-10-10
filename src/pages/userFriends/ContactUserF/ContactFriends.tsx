import React, { Key } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Button } from "../../../components/UI";
import { friendService } from "../../../services/friendService";
import { UFriends } from "../../../types/UFriends";
import "./contactFriends.css";

interface ContactFriendsProps {
    userId: string;
    friends: UFriends[];
    reFetch: () => void;
}

const ContactFriends: React.FC<ContactFriendsProps> = ({
    friends,
    userId,
    reFetch,
}) => {
    const removeFriend = async (
        userId: string,
        friendId: string
    ): Promise<void> => {
        console.log(userId, friendId);

        await friendService.delete(userId, friendId);
        reFetch();
    };
    return (
        <>
            {friends &&
                friends.map((friend: UFriends, key: Key) => (
                    <div className="contact_friends_container" key={key}>
                        <NavLink to={`/`} className="navlink_friend_container">
                            <img
                                className="friend-picture"
                                src={friend.userImg}
                                alt={`${friend.firstname} ${friend.lastname}`}
                            />
                            <p>
                                {friend.firstname}&nbsp;{friend.lastname}
                            </p>
                        </NavLink>
                        <Button
                            color="black_red"
                            onClick={() => {
                                removeFriend(userId, friend._id);
                            }}
                        >
                            <span className="button_container">
                                <IoTrashBinOutline />
                                Supprimer
                            </span>
                        </Button>
                    </div>
                ))}
        </>
    );
};

export default ContactFriends;
