import {BiBeer} from '../../../icons/index';
import RoomButton from '../../UI/CommonButton/CommonButton';
import './viewRoomApero.css';

interface ViewRoomAperoProps {
    roomId: string;
}

const ViewRoomApero: React.FC<ViewRoomAperoProps> = () => {
    return (
        <div className="view-room-item">
            <div className="view-room-section">
                <BiBeer className='view-room-icon'/>
                <span>Qui paye l'apéro ?</span>
            </div>
            <div className='wheel-btn'>
                <RoomButton buttonText='Lancer la roue' handleClick={()=> {console.log('user')}}/>
            </div>
        </div>

    );
};

export default ViewRoomApero;
