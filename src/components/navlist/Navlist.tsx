import { NavLink } from "react-router-dom";
import { TbBrandAirtable } from "react-icons/tb";
import { AiOutlineMessage, AiOutlineStar } from "react-icons/ai";
import { BiHomeAlt, BiSearchAlt } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import './navlist.css';
import NavbarItem from "../UI/navbar-item/NavbarItem";

const Navlist = () => {
    let activeStyle = {
        backgroundColor: "red",
    };
    let navlinksInfos = [
        {
			path: "/profile",
			icon: <BiHomeAlt/>,
            name: 'profile'
		},
        {
			path: "/searchuser",
			icon: <BiSearchAlt/>,
            name: 'searchuser'
		},
        {
			path: "/usertables",
			icon: <TbBrandAirtable/>,
            name: 'usertables'
		},
        {
			path: "/usermessages",
			icon: <AiOutlineMessage/>,
            name: 'usermessages'
		},
        {
			path: "/userfriends",
			icon: <HiOutlineUserGroup/>,
            name: 'userfriends'
		},
        {
			path: "/premium",
			icon: <AiOutlineStar/>,
            name: 'premium'
		},
        {
			path: "/reglages",
			icon: <FiSettings/>,
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
