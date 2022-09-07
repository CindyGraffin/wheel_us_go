import axios from "axios";  

class RoomService {   
    getRoomsByUserId = (id: string) => {     
        return axios.get(`http://localhost:8800/api/rooms/${id}`);
    }; 
}  

export const roomService = Object.freeze(new RoomService());