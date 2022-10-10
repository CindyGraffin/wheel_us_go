import './commonButton.css';

interface CommonButtonProps {
    buttonText: string;
    handleClick: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({buttonText, handleClick}) => {
    return (
        <div>
            <button  className="room-btn" onClick={handleClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default CommonButton;
