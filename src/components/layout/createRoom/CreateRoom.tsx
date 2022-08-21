import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import './createRoom.css';

interface CreateRoomProps {
    icon: ReactNode;
    typeRoom: string;
}

const CreateRoom:React.FC<CreateRoomProps> = ({icon, typeRoom}) => {
    const navigate = useNavigate();
    const handleClick = ()=> {
        navigate('/createroom')
    }
    return (
        <button className="create-room" onClick={handleClick}>
            {icon}
            <p>CREER UNE TABLE {typeRoom}</p>
        </button>
    );
};


export default CreateRoom;
