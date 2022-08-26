import './contact.css';

interface ContactProps {
	firstName: string;
	lastName: string;
	imgSrc: string | undefined;
}

const Contact: React.FC<ContactProps> = ({firstName, lastName, imgSrc}) => {
	return (
			<div className="contact__container">
				<img src={imgSrc} alt="" />
				<p>{firstName} {lastName}</p>
			</div>
	);
};

export default Contact;