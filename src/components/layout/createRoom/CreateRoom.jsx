import './createRoom.css';

const CreateRoom = ({icon, type}) => {
    return (
        <button className="create-room">
            {icon}
            <p>CREER UNE TABLE {type}</p>
        </button>
    );
};

export default CreateRoom;
