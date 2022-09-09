import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const returnToRooms = () => {
        navigate('/userrooms')
    }
    return (
        <Layout>
            <div className='view-room__container'>
                <ViewRoomTitle roomTitle='Le Camden Bar'/>
                <ViewRoomLocation roomLocation='Vieux-Lille'/>
                <ViewRoomDate roomDate='Mercredi 31 Juillet 2022 - 19h45'/>
                <ViewRoomDresscode dresscodeDescription='Déguisement de souris verte'/>
                <ViewRoomApero roomId='1'/>
                <ViewRoomUsers roomId='1'/>
                <div className='view-room-btns'>
                    <RoomButton buttonText='Retour aux salles' handleClick={returnToRooms}/>
                    <RoomButton buttonText='Quitter la salle' handleClick={() => console.log('hey')}/>
                </div>
            </div>
        </Layout>
    );
};

export default ViewRoom;
