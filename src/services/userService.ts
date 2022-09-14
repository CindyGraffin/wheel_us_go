import { redirect } from "./../utils/redirect";
import axios from "axios";
class UserService {
    getUserById = (id: string) => {
        return axios.get(`http://localhost:8800/api/users/${id}`);
    };

    getFriendsByUserId = (id: string) => {
        return axios.get(`http://localhost:8800/api/users/friends/${id}`);
    };

    logOut = (): void => {
        localStorage.clear();
        redirect("/");
    };
}

export const userService = Object.freeze(new UserService());
