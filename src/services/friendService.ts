import { api } from "../utils/dryconfig";

class FriendService {
    delete = (userId: string, friendId: string) => {
        return api.delete(`/friend/${userId}/${friendId}`);
    };
}
export const friendService = Object.freeze(new FriendService());
