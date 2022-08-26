import './noContact.css'

interface NoContactProps {
    question: string;
    info: string;
    btnText: string;
}

const NoContact: React.FC<NoContactProps> = ({question, info, btnText}) => {
    return (
        <>
            <div className="no-contacts-message">
                <p>{question}</p>
                <p>{info}</p>
            </div>
            <button className="add-contact">{btnText}</button>
        </>
    );
};

export default NoContact;
