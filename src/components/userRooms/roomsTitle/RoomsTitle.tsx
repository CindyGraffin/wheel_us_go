import "./roomsTitle.css";

interface RoomsTitleProps {
    titleText: string;
    icon: JSX.Element;
}

const RoomsTitle: React.FC<RoomsTitleProps> = ({ titleText, icon }) => {
    return (
        <div className="rooms-title">
            {icon}
            <div>
                <h1>{titleText}</h1>
            </div>
        </div>
    );
};

export default RoomsTitle;
