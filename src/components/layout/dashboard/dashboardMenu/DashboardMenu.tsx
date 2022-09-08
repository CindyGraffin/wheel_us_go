import clsx from "clsx";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./dashboardMenu.css";
import MenuItem from "./MenuItem/MenuItem";

const navlinks = [
    {
        id: 1,
        path: "/dashboard/users",
        name: "Utilisateurs",
        icon: <HiOutlineUsers />,
    },
    {
        id: 2,
        path: "/dashboard/stats",
        name: "Statistiques",
        icon: <BiStats />,
    },
] as const;

export interface DashboardMenuProps {
    className?: string;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ className = "" }) => {
    const [show, setShow] = useState<boolean>(false);

    const onClickDisplayPanelMenu = () => {
        if (show === false) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    return (
        <nav
            className={clsx(
                "dashboard_nav",
                show === false && "hide__menu",
                show === true && "show__menu"
            )}
        >
            <button
                className="display__button"
                onClick={onClickDisplayPanelMenu}
            >
                {show ? (
                    <IoChevronBack className="menu__icons" />
                ) : (
                    <IoChevronForward className="menu__icons" />
                )}
            </button>
            <ul>
                <div className="category__spacing">
                    <MenuItem
                        path="/dashboard"
                        name="Dashboard"
                        icon={<AiOutlineHome />}
                    />
                </div>
                <div>
                    {navlinks.map((navlink, key) => (
                        <MenuItem
                            key={key}
                            path={navlink.path}
                            name={navlink.name}
                            icon={navlink.icon}
                        />
                    ))}
                </div>
            </ul>
        </nav>
    );
};

export default DashboardMenu;
