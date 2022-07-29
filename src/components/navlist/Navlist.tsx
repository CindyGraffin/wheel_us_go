import { NavLink } from "react-router-dom";
import { ImSearch, ImBubble } from "react-icons/im";
import { RiRestaurantFill } from "react-icons/ri";
import { IoSettingsSharp, IoStar } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import './navlist.css';
import NavbarItem from "../UI/navbar-item/NavbarItem";

const Navlist = () => {
    let activeStyle = {
        backgroundColor: "red",
    };
    let navlinksInfos = [
        {
			path: "/profile",
			icon: <AiOutlineMessage/>,
            name: 'profile'
		},
        {
			path: "/searchuser",
			icon: <ImSearch/>,
            name: 'searchuser'
		},
        {
			path: "/usertables",
			icon: <RiRestaurantFill/>,
            name: 'usertables'
		},
        {
			path: "/usermessages",
			icon: <AiOutlineMessage/>,
            name: 'usermessages'
		},
        {
			path: "/userfriends",
			icon: <FaUserFriends/>,
            name: 'userfriends'
		},
        {
			path: "/premium",
			icon: <IoStar/>,
            name: 'premium'
		},
        {
			path: "/reglages",
			icon: <IoSettingsSharp/>,
            name: 'reglages'
		}
    ];
    return (
        <nav>
            <ul>
                {navlinksInfos.map((navlink) => {
                    return (
                        <li>
                            <NavLink
                                id="1"
                                key={navlink.name}
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
