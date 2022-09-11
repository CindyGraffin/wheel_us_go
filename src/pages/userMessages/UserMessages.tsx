import { useContext, useState } from "react";
import { Layout } from "../../components";
import Conversation from "../../components/userMessages/conversation/Conversation";
import Message from "../../components/userMessages/message/Message";
import { AuthContext } from "../../context/AuthContext";
import "./userMessages.css";

interface UserMessagesProps {
	own: boolean;
}

const UserMessages: React.FC<UserMessagesProps> = ({ own }) => {

	const [conversations, setConversations] = useState([])

	const { state } = useContext(AuthContext);
	const userId = state.user!._id

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
						{/* {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))} */}
					</div>
				</div>
				<div className="chatBox">
					<div className="chatBoxWrapper">
						{/* {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span> */}
						{/* )} */}
					</div>
				</div>
				<div className="chatOnline">
					{/* <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div> */}
				</div>
			</div>
		</Layout>
	);
};

export default UserMessages;
