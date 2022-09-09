import "./userFriends.css";
import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import { UFriends } from "./types/UFriends";
import { userService } from "./UserService/userService";
import ContactFriends from "./ContactUserF/ContactFriends";

const UserFriends: React.FC<unknown> = () => {
	const { state } = useContext(AuthContext);

	const userId = state.user?._id;
	const userGroups = state.user?.groupsId;

	const [friends, setFriends] = useState<[] | UFriends[]>([]);
	useEffect(() => {
		const fetchUFriends = async () => {
			const response = await userService.getFriendsByUserId(userId!);
			setFriends(response.data.friendsId);
			console.table(response.data);
			console.table(response.data.friendsId);
		};
		fetchUFriends();
	}, [userId]);

	useEffect(() => {
		console.table(friends);
	}, [friends]);

	const [active, setActive] = useState("Contacts");

	return (
		<Layout>
			<div>
				<button
					onClick={() => {
						setActive("Contacts");
					}}
				>
					Contacts
				</button>{" "}
				<button
					onClick={() => {
						setActive("Groupes");
					}}
				>
					Groupes
				</button>
				<div
					id="Contacts"
					hidden={active === "Contacts" ? false : true}
				>
			
					<h1> Liste d'Amis : </h1>
					{friends.map((friend) => (
						<ContactFriends
							key={friend.firstname}
							firstname={friend.firstname}
							lastname={friend.lastname}
							userImg={friend.userImg}
						/>
					))}
				</div>
				<div id="Groupes" hidden={active === "Groupes" ? false : true}>
		
					<h1> Mes Groupes : </h1>
				</div>
			</div>
		</Layout>
	);
};

export default UserFriends;

// import { useContext } from "react";
// import { Layout} from "../../components";
// import { AuthContext } from "../../context/AuthContext";
// import "./userFriends.css";
// import { IoPersonOutline } from "react-icons/io5";
// import { BsPeople } from "react-icons/bs";
// import { ContactGroup } from "../../components/layout";

// import React, { useState } from 'react'

// const UserFriends = () => {
//     // const [userFriends, setUserFriends] = useState("Bouba");
//     const { state} = useContext(AuthContext);
//     console.log(state);

//     const userFriends = state.user?.friendsId;
//     console.log(userFriends);

//     const userGroups = state.user?.groupsId
//     console.log(userGroups);

//     const contactsUsersCreation = [
// 		{
// 			classname: "contacts-group contacts",
// 			contacts: userFriends,
// 			title: 'CONTACTS',
// 			icon: <IoPersonOutline className="contact-title-icon" />
// 		}
//     ]

//     const contactsGroupsCreation = [
// 		{
// 			classname: "contacts-group groups",
// 			contacts: userGroups,
// 			title: 'GROUPES',
// 			icon: <BsPeople className="contact-title-icon" />
// 		}
//     ]

//     const [ active, setActive ] = useState('Contacts');

//   return (
//     <div >
//         <button onClick={()=>{setActive('Contacts')}}>Contacts</button> <button onClick={()=>{setActive('Groupes')}}>Groupes</button>
//         <div id="Contacts" hidden={active === 'Contacts' ? false : true}>TODO:

//         {contactsUsersCreation.map((contactsGroup) => (
//                     <ContactGroup
//                         key={contactsGroup.title}
//                         classname={contactsGroup.classname}
//                         contacts={contactsGroup.contacts}
//                         title={contactsGroup.title}
//                         icon={contactsGroup.icon}
//                     />
//                 ))}
//         </div>
//         <div id="Groupes" hidden={active === 'Groupes' ? false : true}>TODO:
//         {contactsGroupsCreation.map((contactsGroup) => (
//                     <ContactGroup
//                         key={contactsGroup.title}
//                         classname={contactsGroup.classname}
//                         contacts={contactsGroup.contacts}
//                         title={contactsGroup.title}
//                         icon={contactsGroup.icon}
//                     />
//                 ))}
//         </div>
//         </div>
//   )
// }

// export default UserFriends;
