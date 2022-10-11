import IUser from "../types/IUser";
import { api } from "../utils/dryconfig";

class FriendService {
    delete = (userId: string, friendId: string) => {
        return api.delete(`/friend/${userId}/${friendId}`);
    };

    addFriend = (userId: string, friendId: string) => {
        const payload = {
            userId,
            friendId,
        };
        return api.put(`friend/create`, payload);
    };

    getIsFriend = (data: IUser[], currentUser: string) => {
        return data.map((friend: any) => friend._id).includes(currentUser);
    };
}
export const friendService = Object.freeze(new FriendService());
