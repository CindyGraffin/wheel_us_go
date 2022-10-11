import { useContext, useState, useEffect } from "react";
import { CommonButton, Layout, Room, RoomsTitle } from "../../components/index";
import { AuthContext } from "../../context/AuthContext";
import { roomService } from "../../services/roomService";
import { IRoom } from "../../types/IRoom";
import "./userRooms.css";
import {AiOutlinePlusCircle, TbBrandAirtable} from '../../icons/index';
import { useNavigate } from "react-router-dom";

const UserRooms: React.FC<unknown> = () => {
    const { state } = useContext(AuthContext);
    const userId = state.user?._id;

    const [rooms, setRooms] = useState<[] | IRoom[]>([]);
    const [deleteRoom, setDeleteRoom] = useState<boolean>(false);

    const navigate = useNavigate()

    /**
     * au chargement du composant, ou lors de la modification de deleteRoom ou userId, le service va récupérer les salles de l'utilisateur et les stocker dans le state room
     */
    useEffect(() => {
        const fetchRooms = async () => {
            const response = await roomService.getRoomsByUserId(userId!);
            setRooms(response.data);
        };
        fetchRooms();
    }, [deleteRoom, userId]);

    const handleClick = () => {
        navigate('/createroom')
    }    

    return (
        <Layout>
            <>
                <RoomsTitle icon={<TbBrandAirtable className='rooms-icon'/>} titleText='MES SALLES'/>
                <div className="create-room-btn">
                    <button onClick={handleClick} className='form-btn rooms'>
                        <AiOutlinePlusCircle/>
                        CREER UNE SALLE 
                    </button>
                </div>
                {rooms.length === 0 && (
                    <div className="no-rooms">
                        <p>Vous n'apartenez à aucune salle ?</p>
                        <p>Cliquez sur le bouton &laquo;Créer une salle&raquo; pour créer votre première salle en invitant vos amis.</p>
                    </div>
                )}
                <div className="rooms__container">
                    {rooms.map((room) => (
                        <Room
                            key={room._id}
                            roomId={room._id}
                            roomTheme={room.theme}
                            roomDate={room.date.toString()}
                            roomTitle={room.placeName}
                            deleteRoom={deleteRoom}
                            setDeleteRoom={setDeleteRoom}
                        />
                    ))}
                </div>
            </>
        </Layout>
    );
};

export default UserRooms;
