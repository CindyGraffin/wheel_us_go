import axios from "axios";  
class UserService {   
    getFriendsByUserId = (id: string) => {     
        return axios.get(`http://localhost:8800/api/users/friends/${id}`);
    }; 
}  

export const userService = Object.freeze(new UserService());