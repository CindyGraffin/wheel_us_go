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
			
				{contacts.length > 0 ? (<>
                    <div className="contact-group">
					{contacts.map((contact: IUser) => (
						<Contact
							key={contact.email}
							firstname={contact.firstname}
							lastname={contact.lastname}
							imgSrc={contact.userImg}
						/>
					))}
                    </div>
                    <div className="contact-btn">
                    <AiOutlinePlus className="contact-btn-icon" />
                </div>
                </>
				) : classname === "contacts-group contacts" ? (
                    <>
					<div className="no-contacts-message">
						<p>Vous n'avez pas encore de poulets à vos côtés ?</p>
						<p>
							Ajoutez un ami en cliquant sur le bouton ci dessous !
						</p>
					</div>
                    <button className="add-contact">Ajouter un ami</button>
            
                    </>
				) : (
                    <>
					<div className="no-contacts-message">
						<p>Vous ne faites partie d'aucune basse-cour ?</p>
						<p>
							Créer un groupe en cliquant sur le bouton ci dessous !
						</p>
					</div>
                    <button className="add-contact">Créer un groupe</button>
                    </>
				)}
			
			
		</div>
	);
};

export default ContactGroup;
