import { redirect } from "./../utils/redirect";
import { api } from "../utils/dryconfig";
class UserService {
    getUserById = (id: string) => {
        return api.get(`/users/${id}`);
    };

    getFriendsByUserId = (id: string) => {
        return api.get(`/users/friends/${id}`);
    };

    banUserById = async (id: string): Promise<void> => {
        await api.post(`/users/ban/${id}`).catch((err) => console.error(err));
    };

    logOut = (): void => {
        localStorage.clear();
        redirect("/");
    };
}

export const userService = Object.freeze(new UserService());

