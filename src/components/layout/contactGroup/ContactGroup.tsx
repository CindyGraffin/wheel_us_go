import { ReactNode } from "react";
import { Contact } from "../index";
import { AiOutlinePlus } from "react-icons/ai";
import "./contactgroup.css";
import IUser from "../../../types/IUser";

interface ContactGroupProps {
	classname: string;
	title: string;
	contacts?: any;
	icon: ReactNode;
}

const ContactGroup: React.FC<ContactGroupProps> = ({
	classname,
	title,
	contacts,
	icon,
}) => {
	return (
		<div className={classname}>
			<div className="contacts-title">
				{icon}
				<p>{title}</p>
			</div>
			<div className="contact-group">
				{contacts.length > 0 ? (
					contacts.map((contact: IUser) => (
						<Contact
							key={contact.email}
							firstName={contact.firstName}
							lastName={contact.lastName}
							imgSrc={contact.userImg}
						/>
					))
				) : classname === "contacts-group contacts" ? (
					<div>
						<p>Vous n'avez pas encore de poulets à vos côtés ?</p>
						<p>
							Ajoutez un ami en cliquant sur le bouton ci dessous !
						</p>
					</div>
				) : (
					<div>
						<p>Vous n'avez pas encore de basse-cour ?</p>
						<p>
							Créer un groupe en cliquant sur le bouton ci dessous !
						</p>
					</div>
				)}
			</div>
			<div className="contact-btn">
				<AiOutlinePlus className="contact-btn-icon" />
			</div>
		</div>
	);
};

export default ContactGroup;
