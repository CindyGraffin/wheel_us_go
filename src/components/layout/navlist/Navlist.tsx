import {AiOutlineMessage, AiOutlineStar, BiHomeAlt, BiSearchAlt, FiSettings, HiOutlineUserGroup, TbBrandAirtable} from '../../../icons/index'
import {NavbarItem} from "../index";
import { NavLink } from "react-router-dom";
import './navlist.css';

const Navlist: React.FC<unknown> = () => {
    let activeStyle = {
        color: '#c8865a',
    };
    let myStyle = {
        color: '#c8865a'
    }
    const navlinksInfos = [
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
    ] as const;
    return (
        <nav className='nav'>
            <ul>
                {navlinksInfos.map((navlink, i) => {
                    return (
                        <li key={navlink.name}>
                            <NavLink
                                to={navlink.path}
                                className={({ isActive }) =>
                                    isActive ? 'active-link' : ''
                                }
                            >
                                <NavbarItem icon={navlink.icon} key={navlink.name+i}/>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navlist;
