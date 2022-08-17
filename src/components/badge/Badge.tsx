import './badge.css'
import { GiRoastChicken } from '../../icons/index';

const Badge: React.FC<unknown> = () => {
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
