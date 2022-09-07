import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import "./dashboardMenu.css";
import MenuItem from "./MenuItem/MenuItem";

const navlinks = [
    {
        id: 1,
        path: "/dashboard/users",
        name: "Users",
        icon: <HiOutlineUsers />,
    },
    {
        id: 2,
        path: "/dashboard/stats",
        name: "Stats",
        icon: <BiStats />,
    },
] as const;

export interface DashboardMenuProps {
    className?: string;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ className = "" }) => {
    return (
        <nav className="dashboard_nav">
            <ul>
                <MenuItem
                    path="/dashboard"
                    name="Dashboard"
                    icon={<AiOutlineHome />}
                />
                {navlinks.map((navlink, key) => (
                    <MenuItem
                        key={key}
                        path={navlink.path}
                        name={navlink.name}
                        icon={navlink.icon}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default DashboardMenu;
