import {BiBeer} from '../../../icons/index';
import RoomButton from '../../UI/roomButton/RoomButton';

interface ViewRoomAperoProps {
    roomId: string;
}

const ViewRoomApero: React.FC<ViewRoomAperoProps> = () => {
    return (
        <div>
            <BiBeer/>
            <p>Qui paye l'apéro ?</p>
            <RoomButton buttonText='Lancer la roue' handleClick={()=> {console.log('user')}}/>
        </div>
    );
};

export default ViewRoomApero;
