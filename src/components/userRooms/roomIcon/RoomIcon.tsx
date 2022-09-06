import { IoRestaurantOutline, BiBeer, TbSofa } from '../../../icons/index';

interface RoomIconProps {
    roomTheme: string
}

const RoomIcon: React.FC<RoomIconProps> = ({roomTheme}) => {
    return (
        <div className='room-icon'>
            {roomTheme === 'restaurant' ? 
            (
                <IoRestaurantOutline/>
            )
            : roomTheme === 'bar' ?
            (
                <BiBeer/>

            )
            : (
                <TbSofa/>
            )} 
        </div>
    );
};

export default RoomIcon;
