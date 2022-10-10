import './contact.css';

interface ContactProps {
	firstname: string;
	lastname: string;
	imgSrc: string | undefined;
}

const Contact: React.FC<ContactProps> = ({firstname, lastname, imgSrc}) => {
	return (
			<div className="contact__container">
				<div className='contact_img'>
					<img src={imgSrc} alt="" />
				</div>
				<p>{firstName} {lastName}</p>
			</div>
	);
};

export default Contact;