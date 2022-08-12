import { IoRestaurantOutline } from "react-icons/io5";
import { Navlist } from "../index";
import { BiBeer } from "react-icons/bi";
import { TbSofa } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import "./layout.css";

interface Props {
	children: JSX.Element;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="layout">
			<div className="layout__container">
				<div className="left">
					<div className="left__container">
						<div className="left-items__container">
							<div className="logo__container">
								<img src={require("./logo2.png")} alt="" />
							</div>
							<div className="create-table__container">
								<div className="create-tables">
									<button className="create-table">
										<IoRestaurantOutline className="create-table-icon" />
										<p>CREER UNE TABLE RESTAURANT</p>
									</button>
									<button className="create-table">
										<BiBeer className="create-table-icon" />
										<p>CREER UNE TABLE BAR</p>
									</button>
									<button className="create-table">
										<TbSofa className="create-table-icon" />
										<div className="create-table-home">
											<p>CREER UNE TABLE HOME</p>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="center">
					<div className="center__container">
						<div className="navlist__container">
							<Navlist />
						</div>
						<div className="cent">{children}</div>
					</div>
				</div>
				<div className="right">
					<div className="right__container">
						<div className="contacts__container">
							<div className="contacts-group contacts">
								<div className="contacts-title">
									<IoPersonOutline className="contact-title-icon" />
									<p>CONTACTS</p>
								</div>
							</div>
							<div className="contacts-group groups">
								<div className="contacts-title">
									<BsPeople className="contact-title-icon" />
									<p>GROUPS</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
