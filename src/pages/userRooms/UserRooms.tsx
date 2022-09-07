import React, { useContext, useState, useEffect } from "react";
import { Layout, RoomsTitle} from "../../components";
import Room from "../../components/userRooms/room/Room";
import { AuthContext } from "../../context/AuthContext";
import { roomService } from "../../services/roomService";
import { IRoom } from "../../types/IRoom";
import "./userRooms.css";

const UserRooms: React.FC<unknown> = () => {
	const {state} = useContext(AuthContext);
    const userId = state.user?._id

    const [rooms, setRooms] = useState<[] | IRoom[]>([])

    useEffect(() => {
        const fetchRooms = async() => {
            const response = await roomService.getRoomsByUserId(userId!)
            setRooms(response.data)
            
        }
        fetchRooms()   
    }, [])
    
    return (
        <Layout>
            <div className="rooms__container">
                <RoomsTitle titleText="MES SALLES"/> 
                {rooms.map((room) => (
                    <Room roomTheme={room.theme} roomDate={room.date.toString()} roomTitle={room.placeName} key={room._id}/>
                ))}   
                
            </div>
        </Layout>
    );
};

export default UserRooms;