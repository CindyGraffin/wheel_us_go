import axios from "axios";  

class RoomService {
    getRoomById = (id: string) => {
        return axios.get(`http://localhost:8800/api/rooms/${id}`)
    }
    
    getRoomsByUserId = (id: string) => {     
        return axios.get(`http://localhost:8800/api/rooms/user/${id}`);
    }; 

    getRoomByIdWithParts = (id: string) => {     
        return axios.get(`http://localhost:8800/api/rooms/parts/${id}`);
    }; 

    createRoom = (room: any) => {
        return axios.post(`http://localhost:8800/api/rooms/createroom`, room)
    }

    deleteUserInRoom = (roomId: string, userId: string) => {
        return axios.delete(`http://localhost:8800/api/rooms/${roomId}/${userId}`)
    }
}  

export const roomService = Object.freeze(new RoomService());

