import axios from "axios"; 

class ConversationService {  

    getConversationsByUserId = (userId: string) => {
        return axios.get(`http://localhost:8800/api/conversations/${userId}`)
    }

}  

export const conversationService = Object.freeze(new ConversationService());