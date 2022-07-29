import { FaBeer, FaCouch } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { Navlist } from "../index";
import "./layout.css";

interface Props {
	children: JSX.Element
}

const Layout = ({children}: Props) => {
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
                                <IoRestaurant className="create-table-icon"/>
                                <p>CREER UNE TABLE RESTAURANT</p>
                                
                            </button>
                            <button className="create-table">
                                <FaBeer className="create-table-icon"/>
                                <p>CREER UNE TABLE BAR</p>
                            </button>
                            <button className="create-table">
                                <FaCouch className="create-table-icon"/>
                                <div className="create-table-home">
                                    <p>CREER UNE TABLE </p>
                                    <p>&laquo; CHEZ-SOI &raquo;</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="center__container">
                        <div className="navlist__container">
                            <Navlist />
                            {children}
                        </div>
                        <div className="band__container">band</div>
                        <div className="badges__container">badge</div>
                    </div>
                </div>
                <div className="right">
                    <div className="right__container"></div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
