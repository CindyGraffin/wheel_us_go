import './roomButton.css';

interface RoomButtonProps {
    buttonText: string;
    handleClick: () => void;
}

const RoomButton: React.FC<RoomButtonProps> = ({buttonText, handleClick}) => {
    return (
        <div>
            <button  className="room-btn" onClick={handleClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default RoomButton;
