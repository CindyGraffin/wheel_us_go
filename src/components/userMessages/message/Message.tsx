import "./message.css";
// import { format } from 'timeago.js';

interface MessageProps {
    message: any;
    own: boolean;
}

const Message: React.FC<MessageProps> = ({ message, own }) => {
	return (
		<div className={own ? "message own" : "message"}>
			<div className="messageTop">
				<img
					className="message-img"
					src={require("./chat_logo.png")}
					alt=""
				/>
				<p className="message-text">{message.text}</p>
			</div>
		</div>
	);
}

export default Message;