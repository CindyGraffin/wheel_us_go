import './badge.css'
import {GiRoastChicken} from 'react-icons/gi'
import { FunctionComponent } from 'react';


type BadgeProps = {
    name : string;
    path : string;
    owned: boolean;
}
const Badge : FunctionComponent<BadgeProps>  = ({name, path, owned}) => {
	return (
        <div className='badge-unique'>
            <div className="badge__container">
            <GiRoastChicken className="badge"/>
            </div>
            <p>{name}</p>
        </div>

    );
};

export default Badge;
