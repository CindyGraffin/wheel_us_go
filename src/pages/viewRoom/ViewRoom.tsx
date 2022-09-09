import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../../components";
import RoomButton from "../../components/UI/roomButton/RoomButton";
import ViewRoomApero from "../../components/viewRoom/viewRoomApero/ViewRoomApero";
import ViewRoomDate from "../../components/viewRoom/viewRoomDate/ViewRoomDate";
import ViewRoomDresscode from "../../components/viewRoom/viewRoomDresscode/ViewRoomDresscode";
import ViewRoomLocation from "../../components/viewRoom/viewRoomLocation/ViewRoomLocation";
import ViewRoomTitle from "../../components/viewRoom/viewRoomTitle/ViewRoomTitle";
import ViewRoomUser from "../../components/viewRoom/viewRoomUsers/ViewRoomUser";
import { roomService } from "../../services/roomService";
import { IRoom } from "../../types/IRoom";
import "./viewRoom.css";

const ViewRoom: React.FC<unknown> = () => {
	const navigate = useNavigate();

	const returnToRooms = () => {
		navigate("/userrooms");
	};
	const { roomid } = useParams();

	const [room, setRoom] = useState<undefined | IRoom>(undefined);

	useEffect(() => {
		const fetchRoom = async () => {
			const response = await roomService.getRoomByIdWithParts(roomid!);
			setRoom(response.data);
            console.log(response.data);
            
		};
		fetchRoom();
	}, [roomid]);

	return (
		<Layout>
			{room !== undefined ? (
				<div className="view-room__container">
					<ViewRoomTitle roomTitle={room.placeName} />
					<ViewRoomLocation roomLocation={room.address} />
					<ViewRoomDate roomDate={room.date.toString()} />
					<ViewRoomDresscode dresscodeDescription="Déguisement de souris verte" />
					<ViewRoomApero roomId="1" />
                    {room.partIds.map((part) => (
                        <img className='view-room-part-picture'src={part.userImg} alt="" />
                    ))}
					<div className="view-room-btns">
						<RoomButton
							buttonText="Retour aux salles"
							handleClick={returnToRooms}
						/>
						<RoomButton
							buttonText="Quitter la salle"
							handleClick={() => console.log("hey")}
						/>
					</div>
				</div>
			) : (
                <div>Chargement ...</div>
            )}
		</Layout>
	);
};

export default ViewRoom;
