import { BsPeople, IoPersonOutline } from "../../../icons/index";
import './rightLayout.css'
import ContactGroup from "../contactGroup/ContactGroup";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const RightLayout: React.FC<unknown> = () => {
    const { state } = useContext(AuthContext);
    const userFriends = state.user?.friendsId;
    const userGroups = state.user?.groupsId;
    
    
	
    const contactsGroupsCreation = [
		{
			classname: "contacts-group contacts",
			contacts: userFriends,
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
