import { Layout} from "../../components";
import FormCreateRoom from "../../components/form/newRoom/bodyCreateRoom/formCreateRoom/FormCreateRoom";
import "./createTableRestaurant.css";


const CreateTableRestaurant : React.FC<unknown> = ()  => {
    return (
        <Layout>
            <div>
                <h1>Création des tables</h1>
                <FormCreateRoom/>
            </div>
        </Layout>
    );
};

export default CreateTableRestaurant;