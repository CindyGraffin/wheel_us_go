import React, { Key } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
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
        await friendService.delete(userId, friendId);
        reFetch();
    };
    return (
        <div>
            <div className="add_friend_navlink">
                <NavLink to="/searchuser">
                    <span className="button_container">
                        <AiOutlineUserAdd />
                        Ajouter un ami
                    </span>
                </NavLink>
            </div>

            {friends &&
                friends.map((friend: UFriends, key: Key) => (
                    <div className="contact_friends_container" key={key}>
                        <NavLink
                            to={`/profile/${friend._id}`}
                            className="navlink_friend_container"
                        >
                            <img
                                className="friend-picture"
                                src={friend.userImg}
                                alt={`${friend.firstname} ${friend.lastname}`}
                            />
                            <p>
                                {friend.firstname}&nbsp;{friend.lastname}
                            </p>
                        </NavLink>
                        <div className="contact-friends-btn-large">
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
                        <div className="contact-friends-btn-small">
                            <Button
                                color="black_red"
                                onClick={() => {
                                    removeFriend(userId, friend._id);
                                }}
                            >
                                <span className="button_container">
                                    <IoTrashBinOutline className="trash-icon"/>
                                </span>
                            </Button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ContactFriends;
