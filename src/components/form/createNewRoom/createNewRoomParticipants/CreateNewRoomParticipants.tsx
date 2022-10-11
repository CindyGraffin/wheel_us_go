import {BsPeople} from '../../../../icons/index'
import CreateNewRoomTitle from '../createNewRoomTitle/CreateNewRoomTitle';


const CreateNewRoomParticipants: React.FC<unknown> = () => {
    return (
        <div className="create-new-room-category">
            <CreateNewRoomTitle icon={<BsPeople className="category-icon"/>} titleName='Sélectionnez les invités:'/>
        </div>
    );
};

export default CreateNewRoomParticipants;
