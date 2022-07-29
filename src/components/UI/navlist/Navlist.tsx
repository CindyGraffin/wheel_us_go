import { NavLink } from "react-router-dom";
import NavbarItem from "../navbar-item/NavbarItem";
import { ImHome, ImSearch, ImBubble } from "react-icons/im";
import { RiRestaurantFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const Navlist = () => {
    let activeStyle = {
        backgroundColor: "red",
    };
    let navlinksInfos = [
        {
			path: "/profile",
			icon: <ImHome/>
		},
        {
			path: "/searchuser",
			icon: <ImSearch/>
		},
        {
			path: "/usertables",
			icon: <RiRestaurantFill/>
		},
        {
			path: "/usermessages",
			icon: <ImBubble/>
		},
        {
			path: "/userfriends",
			icon: <FaUserFriends/>
		},
        {
			path: "/premium",
			icon: <FaUserFriends/>
		},
        {
			path: "/reglages",
			icon: <IoSettingsSharp/>
		}
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
                                to={navlink.path}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : {}
                                }
                            >
                                <NavbarItem icon={navlink.icon}/>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navlist;
