import { NavLink } from "react-router-dom";
import NavbarItem from "../navbar-item/NavbarItem";

const Navlist = () => {
    let activeStyle = {
        backgroundColor: "red",
    };
    let navlinksInfos = [
        "/profile",
        "/searchuser",
        "/usertables",
        "/usermessages",
        "/userfriends",
        "/premium",
        "/reglages",
    ];
    return (
        <nav>
            <ul>
                {navlinksInfos.map((navlink, i) => {
                    return (
                        <li>
                            <NavLink
                                id="1"
                                key={i}
                                to={navlink}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : {}
                                }
                            >
                                {navlink}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navlist;
