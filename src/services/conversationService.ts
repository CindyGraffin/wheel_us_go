import axios from "axios"; 

class ConversationService {  

    getConversationsByUserId = (userId: string) => {
        return axios.get(`http://localhost:8800/api/conversations/${userId}`)
    }

    createConversation = (senderId: string, receiverId: string) => {
        return axios.post(`http://localhost:8800/api/conversations/newconversation`, {
            senderId: senderId,
            receiverId : receiverId
        })
    }

}  

export const conversationService = Object.freeze(new ConversationService());