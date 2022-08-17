import "./layout.css";

import { Navlist, CreateRoom, ContactGroup} from "../index";
import { BiBeer, TbSofa, BsPeople, IoPersonOutline, IoRestaurantOutline } from "../../icons/index";

interface LayoutProps {
	children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
	const nums = [1, 2, 3, 4];
	const nums2 = [1, 2, 3];
	const roomsCreation = [
		{
			type: 'RESTAURANT',
			icon: <IoRestaurantOutline className="create-room-icon" />
		},
		{
			type: 'BAR',
			icon: <BiBeer className="create-room-icon" />
		},
		{
			type: 'HOME',
			icon: <TbSofa className="create-room-icon" />
		}
	] as const;
	const contactsGroupsCreation = [
		{
			classname: "contacts-group contacts",
			contacts: nums,
			title: 'CONTACTS',
			icon: <IoPersonOutline className="contact-title-icon" />
		},
		{
			classname: "contacts-group groups",
			contacts: nums2,
			title: 'GROUPES',
			icon: <BsPeople className="contact-title-icon" />
		}
	]

	return (
		<div className="layout">
			<div className="layout__container">
				<div className="left">
					<div className="left__container">
						<div className="left-items__container">
							<div className="logo__container">
								<img src={require("./logo2.png")} alt="" />
							</div>
							<div className="create-rooms__container">
									{roomsCreation.map(room => (
										<CreateRoom icon={room.icon} type={room.type} key={room.type}/>
									))}
							</div>
						</div>
					</div>
				</div>
				<div className="center">
					<div className="center__container">
						<div className="navlist__container">
							<Navlist />
						</div>
						<div className="children-page">
							<div className="children-page__container">
								{children}
							</div>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="right__container">
						<div className="contacts__container">
							{contactsGroupsCreation.map((conctactsGroup) => (
								<ContactGroup 
									classname={conctactsGroup.classname} 
									contacts={conctactsGroup.contacts} 
									title={conctactsGroup.title} 
									icon={conctactsGroup.icon}/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
