import React from "react";
import "./NavbarItem.css";

interface Props {
	icon: JSX.Element
}

const NavbarItem = ({icon}: Props) => {
    return (
		<div className="navbar-item">
			{icon}
		</div>
		);
};

export default NavbarItem;
