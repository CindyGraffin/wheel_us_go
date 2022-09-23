import { Layout} from "../../components";
import SearchingForUsersComponent from "../../components/searchingForUsers/SearchingForUsers";
import "./searchUser.css";


const SearchUser = () => {
    return (
        <Layout>
            <div>
                <SearchingForUsersComponent />
            </div>
        </Layout>
    );
};

export default SearchUser;
