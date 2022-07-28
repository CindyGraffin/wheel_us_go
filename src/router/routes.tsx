import LinkTypes from "./Links.type";
import { ProfilePage, WorkInProgress } from "../pages";
import { ImHome, ImSearch, ImBubble } from "react-icons/im";
import { RiRestaurantFill } from "react-icons/ri";
import { IoStar, IoSettingsOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const routes: LinkTypes[] = [
  {
    path: "/",
    icon: <ImHome />,
    element: <ProfilePage />,
    key : 1
  },
  {
    path: "/search",
    icon: <ImSearch />,
    element: <WorkInProgress />,
    key : 2
  },
  {
    path: "/rooms",
    icon: <RiRestaurantFill />,
    element: <WorkInProgress />,
    key : 3
  },
  {
    path: "/chat",
    icon: <ImBubble />,
    element: <WorkInProgress />,
    key : 4
  },
  {
    path: "/profile/:id",
    icon: <FaUserFriends />,
    element: <WorkInProgress />,
    key : 5
  },
  {
    path: "/premium",
    icon: <IoStar />,
    element: <WorkInProgress />,
    key : 6
  },
  {
    path: "/settings",
    icon: <IoSettingsOutline />,
    element: <WorkInProgress />,
    key : 7
  }
];

export default routes;
