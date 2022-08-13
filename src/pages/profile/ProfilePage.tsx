import { Layout } from "../../components";
import "./profilePage.css";
import UserHeadband from "../../components/userHeadband/userHeadband";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import Badge from "../../components/badge/Badge";

const ProfilePage = () => {
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	return (
		<Layout>
			<div className="profile__container">
				<div className="headband">
					<UserHeadband />
					<div className="badges__container">
						<div className="badges-title">
							<HiOutlineBadgeCheck className="badge-icon" />
							<p>MES BADGES</p>
						</div>
						<div className="badges">
							{nums.map((num, i) => {
								return <Badge key={i}/>;
							})}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProfilePage;
