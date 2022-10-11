import {AiOutlineMessage, AiOutlineStar, BiHomeAlt, BiSearchAlt, FiSettings, HiOutlineUserGroup, TbBrandAirtable} from '../../../icons/index'
import {NavbarItem} from "../index";
import { NavLink } from "react-router-dom";
import './navlist.css';

const Navlist: React.FC<unknown> = () => {
    const navlinksInfos = [
        {
			path: "/profile",
			icon: <BiHomeAlt/>,
		},
        {
			path: "/searchuser",
			icon: <BiSearchAlt/>,
		},
        {
			path: "/userrooms",
			icon: <TbBrandAirtable/>,
		},
        {
			path: "/usermessages",
			icon: <AiOutlineMessage/>,
		},
        {
			path: "/userfriends",
			icon: <HiOutlineUserGroup/>,
		},
        {
			path: "/premium",
			icon: <AiOutlineStar/>,
		},
        {
			path: "/reglages",
			icon: <FiSettings/>,
		}
    ] as const;
    return (
        <nav className='nav'>
            <ul>
                {navlinksInfos.map((navlink, i) => {
                    return (
                        <li key={i}>
                            <NavLink
                                to={navlink.path}
                                className={({ isActive }) =>
                                    isActive ? 'active-link' : ''
                                }
                            >
                                <NavbarItem icon={navlink.icon} key={navlink.path}/>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navlist;
