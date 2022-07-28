import { NavLink } from "react-router-dom";

const Navlist = () => {
	let activeStyle = {
		backgroundColor: 'red'
	}
    return (
		<nav>
			<ul>
				<li>
					<NavLink id="1"
						to="/profile"
						style={({ isActive }) => 
							isActive ? activeStyle : {}
						}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink id="1"
						to="/searchuser"
						style={({ isActive }) => 
							isActive ? activeStyle : {}
						}
					>
						Search
					</NavLink>
				</li>
				<li>
					<NavLink id="2"
						to="/usertables"
						style={({ isActive }) => 
							isActive ? activeStyle : {}
						}
					>
						Tables
					</NavLink>
				</li>
				<li>
					<NavLink id="2"
						to="/usermessages"
						style={({ isActive }) => 
							isActive ? activeStyle : {}
						}
					>
						Messages
					</NavLink>
				</li>
				<li>
					<NavLink id="2"
						to="/userfriends"
						style={({ isActive }) => 
							isActive ? activeStyle : {}
						}
					>
						Friends
					</NavLink>
				</li>
				<li>
					<NavLink id="2"
						to="/premium"
						style={({ isActive }) => 
							isActive ? activeStyle : {}
						}
					>
						Premium
					</NavLink>
				</li>
				<li>
					<NavLink id="2"
						to="/reglages"
						style={({ isActive }) => 
							isActive ? activeStyle : {}
						}
					>
						Reglages
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navlist;
