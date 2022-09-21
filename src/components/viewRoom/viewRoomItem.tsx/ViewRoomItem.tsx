interface ViewRoomItemProps {
    icon: JSX.Element;
    itemName: string;
    itemValue: string;
}

const ViewRoomItem: React.FC<ViewRoomItemProps> = ({icon, itemName, itemValue}) => {
    return (
        <div className="view-room-item">
            <div className="view-room-section">
                {icon}
                <span>{itemName}</span>
            </div>
            <p>{itemValue}</p>
        </div>
    );
};

export default ViewRoomItem;
