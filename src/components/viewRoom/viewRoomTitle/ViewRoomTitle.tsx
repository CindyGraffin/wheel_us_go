interface ViewRoomTitleProps {
    roomTitle: string
}

const ViewRoomTitle: React.FC<ViewRoomTitleProps> = ({roomTitle}) => {
    return (
        <div>
            <p>{roomTitle}</p>
        </div>
    );
};

export default ViewRoomTitle;
