import { ReactNode } from "react";
import Contact from "../contact/Contact";
import { AiOutlinePlus } from "react-icons/ai";
import './contactgroup.css'

interface ContactGroupProps {
    classname: string;
    title: string;
    contacts: number[];
    icon: ReactNode;
}

const ContactGroup = ({classname, title, contacts, icon}: ContactGroupProps) => {

    return (
        <div className={classname}>
            <div className="contacts-title">
                {icon}
                <p>{title}</p>
            </div>
            <div className="contact-group">
                {contacts.map((contact) => (
                    <Contact key={contact} />
                ))}
            </div>
            <div className="contact-btn">
                <AiOutlinePlus className="contact-btn-icon" />
            </div>
        </div>
    );
};

export default ContactGroup;
