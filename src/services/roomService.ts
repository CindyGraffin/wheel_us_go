import axios from "axios";  

class RoomService {   
    getRoomsByUserId = (id: string) => {     
        return axios.get(`http://localhost:8800/api/rooms/${id}`);
    }; 

    deleteUserInRoom = (roomId: string, userId: string) => {
        return axios.delete(`http://localhost:8800/api/rooms/${roomId}/${userId}`)
    }
}  

export const roomService = Object.freeze(new RoomService());

