import { BsPeople, IoPersonOutline } from "../../../icons/index";
import './rightLayout.css'
import ContactGroup from "../contactGroup/ContactGroup";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import IUser from "../../../types/IUser";
import { userService } from "../../../services/userService";

const RightLayout: React.FC<unknown> = () => {

    const [contacts, setContacts] = useState<IUser | []>([])
    const { state } = useContext(AuthContext);
    const userId = state.user!._id

    useEffect(() => {
		const getFriendsByUserId = async () => {
			const response = await userService.getFriendsByUserId(userId);
			setContacts(response.data.friendsId);
		};
		getFriendsByUserId();
	}, [userId]);

    const userGroups = state.user?.groupsId;
    
	
    const contactsGroupsCreation = [
		{
			classname: "contacts-group contacts",
			contacts: contacts,
			title: 'CONTACTS',
			icon: <IoPersonOutline className="contact-title-icon" />
		},
		{
			classname: "contacts-group groups",
			contacts: userGroups,
			title: 'GROUPES',
			icon: <BsPeople className="contact-title-icon" />
		}
	]
    return (
        <div className="right__container">
            <div className="contacts__container">
                {contactsGroupsCreation.map((contactsGroup) => (
                    <ContactGroup
                        key={contactsGroup.title}
                        classname={contactsGroup.classname}
                        contacts={contactsGroup.contacts}
                        title={contactsGroup.title}
                        icon={contactsGroup.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default RightLayout;
