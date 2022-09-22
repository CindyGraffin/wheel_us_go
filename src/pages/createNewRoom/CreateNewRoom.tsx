import { Layout, RoomsTitle } from "../../components";
import FormRender from "../../components/form/formCreateRoom/FormRender";
import "./createNewRoom.css";
import {HiOutlinePencilAlt} from '../../icons/index'

interface CreateNewRoomProps {
    roomType?: string;
}

const CreateNewRoom: React.FC<CreateNewRoomProps> = ({ roomType }) => {
    return (
        <Layout>
            <div className="room-creation__container">
				<RoomsTitle icon={<HiOutlinePencilAlt className='rooms-icon'/>} titleText="CREATION" />
                <FormRender />
            </div>
        </Layout>
    );
};

export default CreateNewRoom;
