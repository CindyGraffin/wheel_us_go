import {GoLocation} from '../../../icons/index';

interface ViewRoomLocationProps {
    roomLocation: string;
}

const ViewRoomLocation: React.FC<ViewRoomLocationProps> = ({roomLocation}) => {
    return (
        <div>
			<GoLocation/>
            <p>{roomLocation}</p>
        </div>
    );
};

export default ViewRoomLocation;
