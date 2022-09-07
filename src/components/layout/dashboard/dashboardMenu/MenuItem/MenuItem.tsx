import React from "react";
import { NavLink } from "react-router-dom";
import "./menuItem.css";

export interface MenuItemProps {
    // id: string;
    path: string;
    name: string;
    icon: JSX.Element;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, name, icon }) => {
    return (
        <li>
            <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "is-active-link" : "")}
            >
                {/* <p>{name}</p> */}
                <div className="icon__container">{icon}</div>
            </NavLink>
        </li>
    );
};

export default MenuItem;
