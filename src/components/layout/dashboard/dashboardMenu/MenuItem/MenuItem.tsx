import React from "react";
import { NavLink } from "react-router-dom";
import "./menuItem.css";

export interface MenuItemProps {
    path: string;
    name: string;
    icon: JSX.Element;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, name, icon }) => {
    return (
        <li className="list__items">
            <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "is-active-link" : "")}
            >
                <div className="menu__items">
                    <p>{name}</p>
                    <div className="icon__container">{icon}</div>
                </div>
            </NavLink>
        </li>
    );
};

export default MenuItem;
