import { ReactNode } from "react";
import { Contact } from "../index";
import { AiOutlinePlus } from "react-icons/ai";
import './contactgroup.css'
import IUser from "../../../types/IUser";

interface ContactGroupProps {
    classname: string;
    title: string;
    contacts?: any;
    icon: ReactNode;
}

const ContactGroup: React.FC<ContactGroupProps> = ({classname, title, contacts, icon}) => {
    return (
        <div className={classname}>
            <div className="contacts-title">
                {icon}
                <p>{title}</p>
            </div>
            <div className="contact-group">
                {contacts.map((contact: IUser) => (
                    <Contact key={contact.email} />
                ))}
            </div>
            <div className="contact-btn">
                <AiOutlinePlus className="contact-btn-icon" />
            </div>
        </div>
    );
};

export default ContactGroup;
