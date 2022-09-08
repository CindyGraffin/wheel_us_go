import { Layout } from '../../components';
import RoomButton from '../../components/UI/roomButton/RoomButton';
import ViewRoomApero from '../../components/viewRoom/viewRoomApero/ViewRoomApero';
import ViewRoomDate from '../../components/viewRoom/viewRoomDate/ViewRoomDate';
import ViewRoomDresscode from '../../components/viewRoom/viewRoomDresscode/ViewRoomDresscode';
import ViewRoomLocation from '../../components/viewRoom/viewRoomLocation/ViewRoomLocation';
import ViewRoomTitle from '../../components/viewRoom/viewRoomTitle/ViewRoomTitle';
import ViewRoomUsers from '../../components/viewRoom/viewRoomUsers/ViewRoomUsers';
import './viewRoom.css';

const ViewRoom: React.FC<unknown> = () => {
    return (
        <Layout>
            <div className='room-view__container'>
                <ViewRoomTitle roomTitle='Le Camden Bar'/>
                <ViewRoomLocation roomLocation='Vieux-Lille'/>
                <ViewRoomDate roomDate='Mercredi 31 Juillet 2022 - 19h45'/>
                <ViewRoomDresscode dresscodeDescription='Déguisement de souris verte'/>
                <ViewRoomApero roomId='1'/>
                <ViewRoomUsers roomId='1'/>
                <RoomButton buttonText='Quitter la salle' handleClick={() => console.log('hey')}/>
                <RoomButton buttonText='Retour aux salles' handleClick={() => console.log('hey')}/>
            </div>
        </Layout>
    );
};

export default ViewRoom;
