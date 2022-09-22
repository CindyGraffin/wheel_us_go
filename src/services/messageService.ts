import { api } from "../utils/dryconfig";

class MessageService {  

    getMessagesByConversationId = (conversationId: string) => {
        return api.get(`/messages/${conversationId}`)
    }

    addMessage = (message: any) => {
        return api.post(`/messages/newmessage`,message)
    }

}  

export const messageService = Object.freeze(new MessageService());