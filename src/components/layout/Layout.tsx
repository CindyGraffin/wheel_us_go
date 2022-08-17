import { IoRestaurantOutline, IoPersonOutline } from "react-icons/io5";
import { Navlist } from "../index";
import { BiBeer } from "react-icons/bi";
import { TbSofa } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import "./layout.css";
import Contact from "../contact/Contact";
import CreateRoom from "./createRoom/CreateRoom";

interface Props {
	children: JSX.Element;
}

const Layout = ({ children }: Props) => {
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
			type: 'CONTACTS',
			contacts: nums
		},
		{
			type: 'GROUPES'
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
							<div className="contacts-group contacts">
								<div className="contacts-title">
									<IoPersonOutline className="contact-title-icon" />
									<p>CONTACTS</p>
								</div>
								<div className="all-contacts">
									{nums.map((num) => (
										<Contact key={num}/>
									))}
								</div>
								<div className="contact-btn">
									<AiOutlinePlus className="contact-btn-icon" />
								</div>
							</div>
							<div className="contacts-group groups">
								<div className="contacts-title">
									<BsPeople className="contact-title-icon" />
									<p>GROUPES</p>
								</div>
								<div className="all-contacts">
									{nums2.map((num) => (
										<Contact />
									))}
								</div>		
								<div className="contact-btn">
									<AiOutlinePlus className="contact-btn-icon" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
