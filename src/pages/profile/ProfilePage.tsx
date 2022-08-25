import "./profilePage.css";
import { Badge, Layout, UserHeadband } from "../../components/index";
import { HiOutlineBadgeCheck } from "../../icons/index";
import { useAppSelector } from "../../hooks/hooks";


const ProfilePage: React.FC<unknown> = () => {
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	const authState = useAppSelector((state) => state.auth)

	// const {data} = useFetc
	return (
		<Layout>
			<div className="profile__container">
				<div className="headband">
					<UserHeadband user={authState.user}/>
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
}

export default ProfilePage;