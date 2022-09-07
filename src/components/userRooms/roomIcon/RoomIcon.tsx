import { IoRestaurantOutline, BiBeer, TbSofa } from '../../../icons/index';
import './roomIcon.css';

interface RoomIconProps {
    roomTheme: string
}

const RoomIcon: React.FC<RoomIconProps> = ({roomTheme}) => {
    return (
        <div className='icon'>
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
