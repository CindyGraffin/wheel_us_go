import { Fragment } from "react";
import { Layout } from "../../components";
import FormRender from "../../components/form/formCreateRoom/FormRender";
import "./createNewRoom.css";

interface CreateNewRoomProps {
  roomType?: string;
}

const CreateNewRoom: React.FC<CreateNewRoomProps> = ({ roomType }) => {
  return (
    <Layout>
      <Fragment>
        <h1>Création des tables</h1>
        <FormRender />
      </Fragment>
    </Layout>
  );
};

export default CreateNewRoom;
