import { api } from "../utils/dryconfig";


class ConversationService {  

    getConversationsByUserId = (userId: string) => {
        return api.get(`/conversations/${userId}`)
    }

    createConversation = (senderId: string, receiverId: string) => {
        return api.post(`/conversations/newconversation`, {
            senderId: senderId,
            receiverId : receiverId
        })
    }

    deleteConversation = (conversationId: string) => {
        return api.delete(`/conversations/${conversationId}`)
    }

}  

export const conversationService = Object.freeze(new ConversationService());