
import { IoRestaurantOutline } from "react-icons/io5";
import { Navlist } from "../index";
import { BiBeer } from "react-icons/bi";
import { TbSofa } from "react-icons/tb";
import "./layout.css";

interface Props {
	children: JSX.Element
}

const Layout = ({children}: Props) => {
    return (
        <div className="layout">
            <div className="layout__container">
                <div className="left">
                    <div className="left__container">
                        <div className="logo">
                            <img src={require("./logo2.png")} alt="" />
                        </div>
                        <div className="create-table__container">
                            <button className="create-table">
                                <IoRestaurantOutline className="create-table-icon"/>
                                <p>CREER UNE TABLE RESTAURANT</p>  
                            </button>
                            <button className="create-table">
                                <BiBeer className="create-table-icon"/>
                                <p>CREER UNE TABLE BAR</p>
                            </button>
                            <button className="create-table">
                                <TbSofa className="create-table-icon"/>
                                <div className="create-table-home">
                                    <p>CREER UNE TABLE HOME</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="center__container">
                        <div className="navlist__container">
                            <Navlist />
                            <div className="cent">
                                {children}
                            </div>
                        </div>
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
