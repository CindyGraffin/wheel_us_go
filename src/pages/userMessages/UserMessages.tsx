import { useContext, useState, useEffect, useRef } from "react";
import { Layout } from "../../components";
import Conversation from "../../components/userMessages/conversation/Conversation";
import Message from "../../components/userMessages/message/Message";
import { AuthContext } from "../../context/AuthContext";
import { conversationService } from "../../services/conversationService";
import { messageService } from "../../services/messageService";
import "./userMessages.css";
import { io } from "socket.io-client";
import { BiSend, IoChatbubblesOutline } from "../../icons/index";
import { AiOutlinePlus } from "react-icons/ai";
import { userService } from "../../services/userService";

const socket = io("https://wheelsocket.azurewebsites.net/");

const UserMessages: React.FC<unknown> = () => {
	const [conversations, setConversations] = useState<any>([]);
	const [currentChat, setCurrentChat] = useState<any>();

	const [messages, setMessages] = useState<any>([]);
	const [newMessage, setNewMessage] = useState<any>("");
	const [arrivalMessage, setArrivalMessage] = useState<any>("");

	const [friends, setFriends] = useState<any>([]);
    const [friendChat, setFriendChat] = useState({})

	const { state } = useContext(AuthContext);
	const userId = state.user!._id;

	const scrollRef = useRef<any>();


	useEffect(() => {
		socket.emit("addUser", userId);
		socket.on("getUsers", (users) => {
			console.log(users);
		});
		socket.on("getMessage", (data) => {
			setArrivalMessage({
				sender: data.senderId,
				text: data.text,
				createdAt: Date.now(),
			});
		});
		return () => {
			socket.off("addUser");
			socket.off("getUsers");
			socket.off("getMessage");
		};
	}, [userId]);
	useEffect(() => {
		const getMessagesByConversationId = async () => {
			const response = await messageService.getMessagesByConversationId(
				currentChat?._id
			);
			setMessages(response.data);
		};
		getMessagesByConversationId();
	}, [currentChat]);
	useEffect(() => {
		const getFriendsByUserId = async () => {
			const response = await userService.getFriendsByUserId(userId);
			setFriends(response.data.friendsId);
		};
		getFriendsByUserId();
	}, [userId]);

	useEffect(() => {
		arrivalMessage &&
			currentChat?.members.includes(arrivalMessage.sender) &&
			setMessages((prev: any) => [...prev, arrivalMessage]);
	}, [arrivalMessage, currentChat]);

	useEffect(() => {
		const getConversationsByUserId = async () => {
			const response = await conversationService.getConversationsByUserId(
				userId
			);
			setConversations(response.data);
		};
		getConversationsByUserId();
	}, [userId]);

	useEffect(() => {
		const getMessagesByConversationId = async () => {
			const response = await messageService.getMessagesByConversationId(
				currentChat?._id
			);
			setMessages(response.data);
		};
		getMessagesByConversationId();
	}, [currentChat]);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const message = {
			sender: userId,
			text: newMessage,
			conversationId: currentChat._id,
		};
		const receiverId = currentChat.members.find(
			(member: any) => member !== userId
		);
		socket.emit("sendMessage", {
			senderId: userId,
			receiverId,
			text: newMessage,
		});
		const addMessage = async () => {
			await messageService.addMessage(message);
			setMessages((prev: any) => [...prev, message]);
			setNewMessage("");
		};
		addMessage();
	};

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

    const handleChanegOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const friendIdSelected = (e.target as HTMLSelectElement).value;
        setFriendChat(friendIdSelected)
    }

	return (
		<Layout>
			<div className="user-messages__container">
				<div className="user-messages">
					<div className="user-messages-chat-menu">
						<div className="chat-menu-input">
							<select
								defaultValue={"Choisir un ami"}
								onChange={handleChanegOption}
                                className="chat-input"
							>
                                <option value="Choisir un ami" disabled>Choisir un ami</option>
								{friends.map((friend: any) => (
									<option key={friend._id} value={friend._id}>
										{`${friend.firstname} ${friend.lastname}`}
									</option>
								))}
							</select>
							<AiOutlinePlus className="chat-menu-start" onClick={() => console.log(friendChat)}/>
						</div>
						<div className="chat-friends">
							{conversations.map((conversation: any) => (
								<div
									key={conversation._id}
									onClick={() => setCurrentChat(conversation)}
								>
									<Conversation
										key={conversation._id}
										conversation={conversation}
										userId={userId}
										currentChat={currentChat}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="user-messages-chat-box">
						{currentChat ? (
							<div className="chat-box">
								<div className="chat-box-messages">
									{messages.map((message: any, i: any) => (
										<div ref={scrollRef} key={i}>
											<Message
												message={message}
												own={message.sender === userId}
											/>
										</div>
									))}
								</div>
								<div className="chat-textarea">
									<textarea
										className="chatMessageInput"
										placeholder="Ecrivez quelque chose ..."
										onChange={(e) =>
											setNewMessage(e.target.value)
										}
										value={newMessage}
									></textarea>
									<div className="chat-btns">
										<button
											className="chatSubmitButton"
											onClick={handleSubmit}
										>
											<BiSend className="send-message-icon" />
										</button>
									</div>
								</div>
							</div>
						) : (
							<div className="no-conversation">
								<IoChatbubblesOutline className="no-conversation-icon" />
								<span>
									Ouvrez une conversation pour commencer à
									discuter !
								</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default UserMessages;
