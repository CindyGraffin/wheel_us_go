import { ReactNode } from "react";
import { Contact } from "../index";
import { AiOutlinePlus } from "react-icons/ai";
import "./contactgroup.css";
import IUser from "../../../types/IUser";
import NoContact from "../noContact/NoContact";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()
    const noContactInfos = [
        {
            question: "Vous n'avez pas encore de poulets à vos côtés ?",
            info: "Ajoutez un ami en cliquant sur le bouton ci dessous !",
            btnText: "Ajouter un ami",
        },
        {
            question: "Vous ne faites partie d'aucune basse-cour ?",
            info: "Créer un groupe en cliquant sur le bouton ci dessous !",
            btnText: "Créer un groupe",
        },
    ] as const;
    const goToAddFriends = () => {
        navigate('/searchuser')
    }
    const goToCreateGroup = () => {
        navigate('/userfriends')
    }
    return (
        <div className={classname}>
            <div className="contacts-title">
                {icon}
                <p>{title}</p>
            </div>

            {contacts && contacts.length > 0 ? (
                <>
                    <div className="contact-group">
                        {contacts.map((contact: IUser) => (
                            <Contact
                                key={contact.email + contact}
                                firstName={contact.firstname}
                                lastName={contact.lastname}
                                imgSrc={contact.userImg}
                            />
                        ))}
                    </div>
                <div className="contact-btn" onClick={goToAddFriends}>
                        <AiOutlinePlus className="contact-btn-icon" />
                    </div>
                </>
            ) : classname === "contacts-group contacts" ? (
                <NoContact
                    key={noContactInfos[0].question}
                    question={noContactInfos[0].question}
                    info={noContactInfos[0].info}
                    btnText={noContactInfos[0].btnText}
                    onClick={goToAddFriends}
                />
            ) : (
                <NoContact
                    key={noContactInfos[1].question}
                    question={noContactInfos[1].question}
                    info={noContactInfos[1].info}
                    btnText={noContactInfos[1].btnText}
                    onClick={goToCreateGroup}
                />
            )}
        </div>
    );
};

export default ContactGroup;
