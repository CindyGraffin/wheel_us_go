import "./layout.css";
import { Navlist, LeftLayout, RightLayout  } from "./index";

interface LayoutProps {
	children: JSX.Element;
}

const Layout: React.FC<LayoutProps>  = ({ children }) => {
	return (
		<div className="layout">
			<div className="layout__container">
				<div className="left">
					<LeftLayout/>
				</div>
				<div className="center">
					<div className="center__container">
						<div className="navlist__container">
							<Navlist />
						</div>
						<div className="children-page">
							<div className="children-page__container">
								{children}
							</div>
						</div>
					</div>
				</div>
				<div className="right">
					<RightLayout/>
				</div>
			</div>
		</div>
	);
};

export default Layout;
