import './badge.css'
import {GiRoastChicken} from 'react-icons/gi'


const Badge = () => {
	return (
        <div className='badge-unique'>
            <div className="badge__container">
            <GiRoastChicken className="badge"/>
            </div>
            <p>Chicken</p>
        </div>

    );
};

export default Badge;
