import { Layout} from "../../components";
import SearchUserMain from "../../components/SearchUserPage/SearchUserMain";
import "./searchUser.css";


const SearchUser = () => {
    return (
        <Layout>
            <div>
                <SearchUserMain></SearchUserMain>
            </div>
        </Layout>
    );
};

export default SearchUser;
