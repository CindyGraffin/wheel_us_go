import axios from "axios";  

class RoomService {   
    getRoomsByUserId = (id: string) => {     
        return axios.get(`http://localhost:8800/api/users/rooms/${id}`);
    }; 
}  

export const userService = Object.freeze(new RoomService());