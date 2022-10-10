import './noContact.css'

interface NoContactProps {
    question: string;
    info: string;
    btnText: string;
    onClick: () => void;
}

const NoContact: React.FC<NoContactProps> = ({question, info, btnText, onClick}) => {
    return (
        <>
            <div className="no-contacts-message">
                <p>{question}</p>
                <p>{info}</p>
            </div>
            <button className="add-contact" onClick={onClick}>{btnText}</button>
        </>
    );
};

export default NoContact;
