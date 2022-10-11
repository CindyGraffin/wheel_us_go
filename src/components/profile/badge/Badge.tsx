import './badge.css'

interface BadgeProps {
    icon: JSX.Element;
    badgeText: string;
    classname: string;
}

const Badge: React.FC<BadgeProps> = ({icon, badgeText, classname}) => {
	return (
        <div className='badge-unique'>
            <div className={classname}>
            {icon}
            </div>
            <p className='badge-text'>{badgeText}</p>
        </div>

    );
};

export default Badge;
