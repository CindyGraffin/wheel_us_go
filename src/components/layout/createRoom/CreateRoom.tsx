import { ReactNode } from 'react';
import './createRoom.css';

interface CreateRoomProps {
    icon: ReactNode;
    typeRoom: string;
}

const CreateRoom:React.FC<CreateRoomProps> = ({icon, typeRoom}) => {
    return (
        <button className="create-room">
            {icon}
            <p>CREER UNE TABLE {typeRoom}</p>
        </button>
    );
};

export default CreateRoom;
