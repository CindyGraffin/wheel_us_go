import "./viewRoom.css";
import { AuthContext } from "../../context/AuthContext";
import {CommonButton, Layout, Loader, ViewRoomApero, ViewRoomDate, ViewRoomDresscode, ViewRoomLocation, ViewRoomParts, ViewRoomTitle} from '../../components/index';
import { IRoom } from "../../types/IRoom";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { roomService } from "../../services/roomService";
import {IoMdExit, TbBrandAirtable} from '../../icons/index'

const ViewRoom: React.FC<unknown> = () => {

	const [room, setRoom] = useState<undefined | IRoom>(undefined);

	const navigate = useNavigate();
	const { roomid } = useParams();

	const {state} = useContext(AuthContext);

	/**
	 * fonction qui permet de retourner sur la page des salles de l'utilisateur
	 */
	const returnToRooms = () => {
		navigate("/userrooms");
	};

	/** 
	 * A l'initialisation du composant, et lors de changement sur roomid, le service récupére la salle ayant l'id roomid
	*/
	useEffect(() => {
		const fetchRoom = async () => {
			const response = await roomService.getRoomByIdWithParts(roomid!);
			setRoom(response.data);
		};
		fetchRoom();
	}, [roomid]);

	/**
	 * Permet à l'utilisateur de quitter la salle et ainsi de supprimer son id de ceux participants à la salle
	 */
	const leaveRoom = async() => {
        await roomService.deleteUserInRoom(roomid!, state.user!._id)
		navigate('/userrooms')
    }

	return (
		<Layout>
			{room !== undefined ? (
				<div className="view-room__container">
					<ViewRoomTitle roomTitle={room.placeName} />
					<ViewRoomLocation roomLocation={room.address} />
					<ViewRoomDate roomDate={room.date.toString()} />
					<ViewRoomDresscode dresscodeDescription={room.dresscode.description!} />
					{room.aperoWheel.setUp === true && (
						<ViewRoomApero roomParts={room.partIds} />
					)}
					<ViewRoomParts parts={room.partIds}/>      
					<div className="view-room-btns">
						<CommonButton
							buttonText="Retour aux salles"
							handleClick={returnToRooms}
							icon={<TbBrandAirtable/>}
						/>
						<CommonButton
							icon={<IoMdExit/>}
							buttonText="Quitter la salle"
							handleClick={leaveRoom}
							classname='delete-btn'
						/>
					</div>
				</div>
			) : (
				<div className="room-loader">
					<Loader/>
				</div>
        )}
		</Layout>
	);
};

export default ViewRoom;
