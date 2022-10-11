import { Badge, Layout, UserHeadband } from "../../../components/index";
import "./userprofile.css";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
    AiOutlineStar,
    BiBeer,
    BiHomeAlt,
    BsPeople,
    FaGlassMartiniAlt,
    GiBabyFace,
    GiCartwheel,
    GiClover,
    GiMeal,
    GiRoastChicken,
    HiOutlineBadgeCheck,
    HiOutlinePhotograph,
    IoCalendarOutline,
    RiShirtLine,
    TbBrandAirtable,
} from "../../../icons/index";

const UserProfile: React.FC<unknown> = () => {
    const { userId } = useParams();
    const { data: user } = useFetch(`/users/${userId}`);

    const badges = [
        {
            classname: "badge__container active",
            badgeText: "Petit Poulet",
            icon: <GiBabyFace className="badge active" />,
        },
        {
            classname: "badge__container active",
            badgeText: "Chicken",
            icon: <GiRoastChicken className="badge active" />,
        },
        {
            classname: "badge__container active",
            badgeText: "Chanceux",
            icon: <GiClover className="badge active" />,
        },
        {
            classname: "badge__container active",
            badgeText: "Dresscode adept'",
            icon: <RiShirtLine className="badge active" />,
        },

        {
            classname: "badge__container active",
            badgeText: "At Home",
            icon: <BiHomeAlt className="badge active" />,
        },
        {
            classname: "badge__container active",
            badgeText: "Adepte des apéros",
            icon: <BiBeer className="badge active active" />,
        },
        {
            classname: "badge__container active",
            badgeText: "Souriez, photo",
            icon: <HiOutlinePhotograph className="badge active" />,
        },
        {
            classname: "badge__container",
            badgeText: "En groupe",
            icon: <BsPeople className="badge" />,
        },
        {
            classname: "badge__container",
            badgeText: "Créateur de tables",
            icon: <TbBrandAirtable className="badge" />,
        },
        {
            classname: "badge__container",
            badgeText: "Dernière minute",
            icon: <IoCalendarOutline className="badge" />,
        },

        {
            classname: "badge__container",
            badgeText: "Accro aux bars",
            icon: <FaGlassMartiniAlt className="badge" />,
        },
        {
            classname: "badge__container",
            badgeText: "Adepte des restos",
            icon: <GiMeal className="badge " />,
        },
        {
            classname: "badge__container",
            badgeText: "Fan de l'aléatoire",
            icon: <GiCartwheel className="badge" />,
        },
        {
            classname: "badge__container",
            badgeText: "Membre premium",
            icon: <AiOutlineStar className="badge" />,
        },
    ];

    return (
        <Layout>
            <div className="profile__container">
                <div className="headband">
                    <UserHeadband user={user} />
                    <div className="badges__container">
                        <div className="badges-title">
                            <HiOutlineBadgeCheck className="badge-icon" />
                            <p>SES BADGES</p>
                        </div>
                        <div className="badges">
                            {badges.map((badge, key) => {
                                return (
                                    <Badge
                                        key={key}
                                        badgeText={badge.badgeText}
                                        icon={badge.icon}
                                        classname={badge.classname!}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UserProfile;
