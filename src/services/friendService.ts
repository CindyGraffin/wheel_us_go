import { api } from "../utils/dryconfig";

class FriendService {
    delete = (userId: string, friendId: string) => {
        console.log(friendId);

        return api.delete(`/friend/${userId}/${friendId}`);
    };
}
export const friendService = Object.freeze(new FriendService());
