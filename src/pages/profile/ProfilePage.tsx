import { Layout} from "../../components";
import "./profilePage.css";
import UserHeadband from "../../components/userHeadband/userHeadband";


const ProfilePage = () => {
    return (
        <Layout>
            <div className="profile__container">
                <div className="headband">
                    <UserHeadband/>
                </div>
            </div>

        </Layout>
    );
};

export default ProfilePage;
