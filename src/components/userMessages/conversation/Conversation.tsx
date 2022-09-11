import './conversation.css';
import {useEffect, useState} from 'react';
import { userService } from '../../../services/userService';

interface ConversationProps {
    conversation: any
    userId: string
}

const Conversation: React.FC<ConversationProps> = ({conversation, userId}) => {
    const [friend, setFriend] = useState<any>(null)

    useEffect(() => {
        const friendId = conversation.members.find((member: string) => member !== userId)
        const getUserById = async() => {
            const response = await userService.getUserById(friendId)
            setFriend(response.data);
        }
        getUserById()
    }, [conversation.members, userId])
    

	return (
        <div className="conversation">
      <img
        className="conversationImg"
        src={
          friend?.userImg
            ? friend.userImg
            : ""
        }
        alt=""
      />
      <span className="conversationName">{friend?.firstname}</span>
    </div>
    );
};

export default Conversation;
