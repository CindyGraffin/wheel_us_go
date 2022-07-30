import { Layout} from "../../components";
import "./profilePage.css";
import me from "./me.jpg";


const ProfilePage = () => {
    return (
        <Layout>
            <div className="profile__container">
                <div className="me">
                    <img src={me} alt="" />
                    <div className="about">
                        <h1>Cindy Graffin</h1>
                        <p>Loos</p>
                    </div>
                </div>
                <div className="me">
                    <img src={me} alt="" />
                    <div className="about">
                        <h1>Cindy Graffin</h1>
                        <p>Loos</p>
                    </div>
                </div>
                <div className="me">
                    <img src={me} alt="" />
                    <div className="about">
                        <h1>Cindy Graffin</h1>
                        <p>Loos</p>
                    </div>
                </div>
                <div className="me">
                    <img src={me} alt="" />
                    <div className="about">
                        <h1>Cindy Graffin</h1>
                        <p>Loos</p>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default ProfilePage;
