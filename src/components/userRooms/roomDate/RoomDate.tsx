import './roomDate.css';

interface RoomDateProps {
    roomDate: string;
}

const RoomDate: React.FC<RoomDateProps> = ({roomDate}) => {
    return (
        <div className="room-date">
            <p>{roomDate}</p>
        </div>
    );
};

export default RoomDate;
