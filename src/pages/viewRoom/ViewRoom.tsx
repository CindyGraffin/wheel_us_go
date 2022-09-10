import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../../components";
import RoomButton from "../../components/UI/roomButton/RoomButton";
import ViewRoomApero from "../../components/viewRoom/viewRoomApero/ViewRoomApero";
import ViewRoomDate from "../../components/viewRoom/viewRoomDate/ViewRoomDate";
import ViewRoomDresscode from "../../components/viewRoom/viewRoomDresscode/ViewRoomDresscode";
import ViewRoomLocation from "../../components/viewRoom/viewRoomLocation/ViewRoomLocation";
import ViewRoomTitle from "../../components/viewRoom/viewRoomTitle/ViewRoomTitle";
import { roomService } from "../../services/roomService";
import { IRoom } from "../../types/IRoom";
import "./viewRoom.css";
import ViewRoomUser from '../../components/viewRoom/viewRoomPart/ViewRoomPart'
import { AuthContext } from "../../context/AuthContext";
import ViewRoomParts from "../../components/viewRoom/viewRoomParts/ViewRoomParts";

const ViewRoom: React.FC<unknown> = () => {
	const navigate = useNavigate();
	const {state} = useContext(AuthContext);

	const returnToRooms = () => {
		navigate("/userrooms");
	};
	const { roomid } = useParams();

	const [room, setRoom] = useState<undefined | IRoom>(undefined);

	useEffect(() => {
		const fetchRoom = async () => {
			const response = await roomService.getRoomByIdWithParts(roomid!);
			setRoom(response.data);
		};
		fetchRoom();
	}, [roomid]);

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
					<ViewRoomDresscode dresscodeDescription="Déguisement de souris verte" />
					<ViewRoomApero roomId="1" />
					<ViewRoomParts parts={room.partIds}/>
                        
					<div className="view-room-btns">
						<RoomButton
							buttonText="Retour aux salles"
							handleClick={returnToRooms}
						/>
						<RoomButton
							buttonText="Quitter la salle"
							handleClick={leaveRoom}
		
						/>
					</div>
				</div>
			) : (
			<div className="loader">
                <div className="view-room-loading"></div>
			</div>
        )}
		</Layout>
	);
};

export default ViewRoom;
