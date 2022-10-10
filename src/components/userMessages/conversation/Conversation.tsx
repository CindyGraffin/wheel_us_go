import "./conversation.css";
import { useEffect, useState } from "react";
import { userService } from "../../../services/userService";

interface ConversationProps {
	conversation: any;
	userId: string;
	currentChat: any;
}

const Conversation: React.FC<ConversationProps> = ({
	conversation,
	userId,
	currentChat
}) => {
	const [friend, setFriend] = useState<any>(null);

	useEffect(() => {
			const friendId = conversation.members.find(
				(member: string) => member !== userId
				);
				const getUserById = async () => {
					const response = await userService.getUserById(friendId);
					setFriend(response.data);
				};
				getUserById();
	}, [conversation.members, userId]);

	return (
		<div className={currentChat === conversation ? "conversation help" : "conversation"} >
			<div>
				<img
					className="conversation-img"
					src={friend?.userImg ? friend.userImg : ""}
					alt=""
				/>
			</div>
			
			<span className="conversation-name">
				{friend?.firstname} {friend?.lastname}
			</span>
		</div>
	);
};

export default Conversation;
