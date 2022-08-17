import './leftLayout.css';
import { IoRestaurantOutline, BiBeer, TbSofa } from '../../../icons/index';
import CreateRoom from '../../layout/createRoom/CreateRoom';

const LeftLayout = () => {
    const roomsCreation = [
		{
			type: 'RESTAURANT',
			icon: <IoRestaurantOutline className="create-room-icon" />
		},
		{
			type: 'BAR',
			icon: <BiBeer className="create-room-icon" />
		},
		{
			type: 'HOME',
			icon: <TbSofa className="create-room-icon" />
		}
	] as const;
    return (
        <div className="left__container">
            <div className="left-items__container">
                <div className="logo__container">
                    <img src={require("./logo.png")} alt="" />
                </div>
                <div className="create-rooms__container">
                    {roomsCreation.map((room) => (
                        <CreateRoom
                            icon={room.icon}
                            type={room.type}
                            key={room.type}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftLayout;
