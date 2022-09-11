import './viewRoomTitle.css'
interface ViewRoomTitleProps {
    roomTitle: string
}

const ViewRoomTitle: React.FC<ViewRoomTitleProps> = ({roomTitle}) => {
    return (
        <div className='view-room-title'>
            <p>{roomTitle}</p>
        </div>
    );
};

export default ViewRoomTitle;
