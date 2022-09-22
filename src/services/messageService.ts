import { api } from "../utils/dryconfig";

class MessageService {  

    getMessagesByConversationId = (conversationId: string) => {
        return api.get(`/api/messages/${conversationId}`)
    }

    addMessage = (message: any) => {
        return api.post(`/api/messages/newmessage`,message)
    }

}  

export const messageService = Object.freeze(new MessageService());