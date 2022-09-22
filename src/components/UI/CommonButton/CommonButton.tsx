import './commonButton.css';

interface CommonButtonProps {
    buttonText: string;
    handleClick: () => void;
    classname?: string;
    icon?: JSX.Element;
}

const CommonButton: React.FC<CommonButtonProps> = ({buttonText, handleClick, icon, classname = ''}) => {
    return (
        <div onClick={handleClick} className={`btn-container ${classname}`}>
            {icon}
            <button  className={`room-btn ${classname}`}>
                {buttonText}
            </button>
        </div>
    );
};

export default CommonButton;
