import { useContext, useState, useEffect, useRef } from "react";
import { Layout } from "../../components";
import Conversation from "../../components/userMessages/conversation/Conversation";
import Message from "../../components/userMessages/message/Message";
import { AuthContext } from "../../context/AuthContext";
import { conversationService } from "../../services/conversationService";
import { messageService } from "../../services/messageService";
import "./userMessages.css";
import {io} from 'socket.io-client';


const UserMessages: React.FC<unknown> = () => {

	const [conversations, setConversations] = useState<any>([]);
	const [currentChat, setCurrentChat] = useState<any>();
	// const [socket, setSocket] = useState<any>(null)
	const [messages, setMessages] = useState<any>([]);
	const [newMessage, setNewMessage] = useState<any>('');

	const socket = useRef(io("ws://localhost:8900"))

	const { state } = useContext(AuthContext);
	const userId = state.user!._id;

	const scrollRef = useRef<any>()

	useEffect(() => {
		// TODO
		// @ts-ignore
		socket.current.emit('addUser', userId)
		socket.current.on('getUsers', users => {
			console.log(users);
			
		})
	}, [userId])



	useEffect(() => {
		const getConversationsByUserId = async () => {
			const response = await conversationService.getConversationsByUserId(userId);
			setConversations(response.data);
		};
		getConversationsByUserId();
	}, [userId]);

	useEffect(() => {
		const getMessagesByConversationId = async () => {
			const response = await messageService.getMessagesByConversationId(currentChat?._id);
			setMessages(response.data);
		};
		getMessagesByConversationId();
	}, [currentChat]);

	const handleSubmit = (e: any) => {
		e.preventDefault()
		const message = {
			sender: userId,
			text: newMessage,
			conversationId: currentChat._id
		}
		const addMessage = async() => {
			await messageService.addMessage(message)
			setNewMessage('')
		}
		addMessage()
	}

	useEffect(() => {
		scrollRef.current?.scrollIntoView({behavior: "smooth"})
	}, [messages]);
		
	

	return (
		<Layout>
			{/* <Topbar /> */}
			<div className="messenger">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						<input
							placeholder="Search for friends"
							className="chatMenuInput"
						/>
						{conversations.map((conversation: any) => (
							<div  key={conversation._id} onClick={() => setCurrentChat(conversation)}>

							<Conversation
								key={conversation._id}
								conversation={conversation}
								userId={userId}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="chatBox">
					<div className="chatBoxWrapper">
						{currentChat ? (
							<>
								<div className="chatBoxTop">
									{messages.map((message: any) => (
										<div ref={scrollRef} key={message._id}>
											<Message
												message={message}
												own={message.sender ===userId}
											/>
										</div>
									))}
								</div>
								<div className="chatBoxBottom">
									<textarea
										className="chatMessageInput"
										placeholder="write something..."
										onChange={(e) =>
											setNewMessage(e.target.value)
										}
										value={newMessage}
									></textarea>
									<button
										className="chatSubmitButton"
										onClick={handleSubmit}
									>
										Send
									</button>
								</div>
							</>
						) : (
							<span className="noConversationText">
								Open a conversation to start a chat.
							</span>
						)}
					</div>
				</div>
		
			</div>
		</Layout>
	);
};

export default UserMessages;
