import './roomTitle.css'

interface RoomTitleProps {
    roomTitle: string;
}

const RoomTitle: React.FC<RoomTitleProps> = ({roomTitle}) => {
    return (
        <div className="room-title">
            <p>{roomTitle}</p>    
        </div>
    );
};

export default RoomTitle;
