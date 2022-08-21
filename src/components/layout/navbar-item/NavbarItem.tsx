import "./NavbarItem.css";

interface NavbarItemProps {
	icon: JSX.Element
}

const NavbarItem: React.FC<NavbarItemProps> = ({icon}) => {
    return (
		<div className="navbar-item">
			{icon}
		</div>
		);
};

export default NavbarItem;
