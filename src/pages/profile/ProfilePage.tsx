import { Navlist } from "../../components";
import ListGroupes from "../../components/listGroupes/listGroupes";
// import ContactUsers from "../../components/contactUsers/ContactUsers";
import "./profilePage.css";

const ProfilePage = () => {
    return (
        <div className="profile">
            <div className="profile__container">
                <div className="left">
                    <div className="left__container">
                        <div className="logo">
                            <img src={require("./logo2.png")} alt="" />
                        </div>
                        <div className="create-table__container">
                            <button className="create-table">
                                <p>Créer une table restaurant</p>
                            </button>
                            <button className="create-table">
                                <p>Créer une table bar</p>
                            </button>
                            <button className="create-table">
                                <p>Créer une tablechez moi</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="center__container">
                        <div className="navlist__container">
                            <Navlist />
                        </div>
                        <div className="band__container">band</div>
                        <div className="badges__container">badge</div>
                    </div>
                </div>
                <div className="right">
                    <div className="right__container">
                      {/* <ContactUsers/> */}
                      <ListGroupes  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
