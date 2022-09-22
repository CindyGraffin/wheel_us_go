import { Fragment } from "react";
import { Layout, RoomsTitle } from "../../components";
import FormRender from "../../components/form/formCreateRoom/FormRender";
import "./createNewRoom.css";

interface CreateNewRoomProps {
    roomType?: string;
}

const CreateNewRoom: React.FC<CreateNewRoomProps> = ({ roomType }) => {
    return (
        <Layout>
            <div className="room-creation__container">
				<RoomsTitle icon={<p></p>} titleText="CREATION" />
                <FormRender />
            </div>
        </Layout>
    );
};

export default CreateNewRoom;
