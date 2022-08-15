
import { Layout } from "../../components";
import { Navlist } from "../../components";
// import BadgesList from "../../components/UI/badges/badges-list";
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

   {/* return (
        <div className="profile">
            <div className="profile__container">
                <div className="left">
                    <div className="left__container">
                        <div className="logo">
                            <img src={require("./logo2.png")} alt="" />
                        </div>
                        <div className="create-table__container">
                            <button className="create-table">
                                <p>Créer une table restaurant</p>
                            </button>
                            <button className="create-table">
                                <p>Créer une table bar</p>
                            </button>
                            <button className="create-table">
                                <p>Créer une table chez moi</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="center__container">
                        <div className="navlist__container">
                            <Navlist />
                        </div>
                        <div className="band__container">band</div>
                        <div className="badges__container"><BadgesList/></div>
                    </div>
                </div>
                <div className="right">
                    <div className="right__container"></div>
                </div>
            </div>
        </div>
    ); */}
};

export default ProfilePage;
