import './roomsTitle.css'
import {TbBrandAirtable} from '../../../icons/index'

interface RoomsTitleProps {
    titleText: string
}

const RoomsTitle: React.FC<RoomsTitleProps> = ({titleText}) => {
    return (
        <div className='rooms-title'>
            <TbBrandAirtable className='rooms-icon'/>
            <div>
            <h1>{titleText}</h1>

            </div>
        </div>
    );
};

export default RoomsTitle;
