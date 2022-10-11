import { api } from "../utils/dryconfig";


class RoomService {
    getRoomById = (id: string) => {
        return api.get(`/rooms/${id}`)
    }
    
    getRoomsByUserId = (id: string) => {     
        return api.get(`/rooms/user/${id}`);
    }; 

    getRoomByIdWithParts = (id: string) => {     
        return api.get(`/rooms/parts/${id}`);
    }; 

    createRoom = (room: any) => {
        return api.post(`/rooms/createroom`, room)
    }

    deleteUserInRoom = (roomId: string, userId: string) => {
        return api.delete(`/rooms/${roomId}/${userId}`)
    }
}  

export const roomService = Object.freeze(new RoomService());

