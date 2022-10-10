import axios from "axios"; 

class MessageService {  

    getMessagesByConversationId = (conversationId: string) => {
        return axios.get(`http://localhost:8800/api/messages/${conversationId}`)
    }

    addMessage = (message: any) => {
        return axios.post(`http://localhost:8800/api/messages/newmessage`,message)
    }

}  

export const messageService = Object.freeze(new MessageService());