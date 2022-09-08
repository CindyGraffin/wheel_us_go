import { Layout} from "../../components";
import FormCreateRoom from "../../components/form/newRoom/bodyCreateRoom/formCreateRoom/FormCreateRoom";
import "./createNewRoom.css";

interface CreateNewRoomProps {
    roomType?: string;
}

const CreateNewRoom : React.FC<CreateNewRoomProps> = ({roomType})  => {
    return (
        <Layout>
            <div>
                <h1>Création des tables</h1>
                <FormCreateRoom/>
            </div>
        </Layout>
    );
};

export default CreateNewRoom;