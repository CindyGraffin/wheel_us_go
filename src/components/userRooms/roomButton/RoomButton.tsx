import './roomButton.css';

interface RoomButtonProps {
    buttonText: string;
    onClick: () => void;
}

const RoomButton: React.FC<RoomButtonProps> = ({buttonText, onClick}) => {
    return (
        <div>
            <button  className="room-btn" onClick={onClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default RoomButton;
