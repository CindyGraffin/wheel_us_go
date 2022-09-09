import React from "react";

interface ContactFriendsProps  {
    firstname : string;
    lastname: string;
    userImg: string ;
}

const ContactFriends : React.FC<ContactFriendsProps> = ({ firstname, lastname, userImg }) => {
    return (
        <div>
        <p>  {firstname} {lastname} </p>
            <img src={userImg} alt="" />

        </div>
    )
}

export default ContactFriends;


