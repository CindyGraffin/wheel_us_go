import './contact.css';

interface ContactProps {
	firstName: string;
	lastName: string;
	imgSrc: string | undefined;
	handleClick: () => void;
}

const Contact: React.FC<ContactProps> = ({firstName, lastName, imgSrc, handleClick}) => {
	return (
			<div className="contact__container" onClick={handleClick}>
				<div className='contact_img'>
					<img src={imgSrc} alt="" />
				</div>
				<p>{firstName} {lastName}</p>
			</div>
	);
};

export default Contact;