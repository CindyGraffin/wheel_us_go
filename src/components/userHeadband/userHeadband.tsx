import './userHeaband.css';
import {GoLocation} from "react-icons/go";


const UserHeadband = () => {
	return (
		<div className="headband__container">
			<div className="headband-img">
				<img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
			</div>
			<div className="headband-infos">
				<div className="headband-name">
					<p>JOHN</p>
					<p>DOEDOE</p>
				</div>
				<div className="headband-location">
					<GoLocation/>
					<p>Lille</p>
				</div>

			</div>
		</div>
	)
};

export default UserHeadband;
