import { redirect } from "./../utils/redirect";
import axios from "axios";
import { api } from "../utils/dryconfig";
class UserService {
    getUserById = (id: string) => {
        return axios.get(`http://localhost:8800/api/users/${id}`);
    };

    getFriendsByUserId = (id: string) => {
        return axios.get(`http://localhost:8800/api/users/friends/${id}`);
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

