import './roomsTitle.css'

interface RoomsTitleProps {
    titleText: string
}

const RoomsTitle: React.FC<RoomsTitleProps> = ({titleText}) => {
    return (
        <div className='rooms-title'>
            <h1>{titleText}</h1>
        </div>
    );
};

export default RoomsTitle;
