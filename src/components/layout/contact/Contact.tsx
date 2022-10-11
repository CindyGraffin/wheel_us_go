import './contact.css';

interface ContactProps {
	firstname: string;
	lastname: string;
	imgSrc: string | undefined;
	handleClick: () => void;
}

const Contact: React.FC<ContactProps> = ({firstname, lastname, imgSrc, handleClick}) => {
	return (
			<div className="contact__container" onClick={handleClick}>
				<div className='contact_img'>
					<img src={imgSrc} alt="" />
				</div>
				<p>{firstname} {lastname}</p>
			</div>
	);
};

export default Contact;