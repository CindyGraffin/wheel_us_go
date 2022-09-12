import "./leftLayout.css";
import { IoRestaurantOutline, BiBeer, TbSofa } from "../../../icons/index";
import { CreateRoom } from "../index";

const LeftLayout: React.FC<unknown> = () => {
	const roomsCreation = [
		{
			typeRoom: "RESTAURANT",
			icon: <IoRestaurantOutline className="create-room-icon" />,
		},
		{
			typeRoom: "BAR",
			icon: <BiBeer className="create-room-icon" />,
		},
		{
			typeRoom: "HOME",
			icon: <TbSofa className="create-room-icon" />,
		},
	] as const;
	return (
		<div className="left__container">
			<div className="logo__container">
				<img src={require("./logo.png")} alt="" />
			</div>
			<div className="create-rooms__container">
				{roomsCreation.map((room) => (
					<CreateRoom
						icon={room.icon}
						typeRoom={room.typeRoom}
						key={room.typeRoom}
					/>
				))}
			</div>
		</div>
	);
};

export default LeftLayout;
