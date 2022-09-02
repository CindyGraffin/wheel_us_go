import { IoRestaurantOutline, BiBeer, TbSofa } from '../../../icons/index';

interface RoomIconProps {
    theme: string
}

const RoomIcon: React.FC<RoomIconProps> = ({theme}) => {
    return (
        <div>
            {theme === 'restaurant' ? 
            (
                <IoRestaurantOutline/>
            )
            : theme === 'bar' ?
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
