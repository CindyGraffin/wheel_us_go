import { Layout } from "../../components";
// import BadgesList from "../../components/UI/badges/badges-list";
import "./profilePage.css";
import UserHeadband from "../../components/userHeadband/userHeadband";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import Badge from "../../components/badge/Badge";


const ProfilePage = () => {
  const badges = [
    {
      name: "Chicken",
      path: "#",
      owned: true,
    },
    { name: "Egg", path: "#", owned: false },
  ];
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
              {badges.map((badge) => (
                <Badge name = {badge.name} path ={badge.path} owned = {badge.owned} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
