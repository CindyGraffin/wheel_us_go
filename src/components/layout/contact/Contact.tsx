import './contact.css';

interface ContactProps {
	firstname: string;
	lastname: string;
	imgSrc: string | undefined;
}

const Contact: React.FC<ContactProps> = ({firstname, lastname, imgSrc}) => {
	return (
			<div className="contact__container">
				<img src={imgSrc} alt="" />
				<p>{firstname} {lastname}</p>
			</div>
	);
};

export default Contact;