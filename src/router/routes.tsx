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
    element: <ProfilePage />
  },
  {
    path: "/search",
    icon: <ImSearch />,
    element: <WorkInProgress />
  },
  {
    path: "/rooms",
    icon: <RiRestaurantFill />,
    element: <WorkInProgress />
  },
  {
    path: "/chat",
    icon: <ImBubble />,
    element: <WorkInProgress />
  },
  {
    path: "/profile/:id",
    icon: <FaUserFriends />,
    element: <WorkInProgress />
  },
  {
    path: "/premium",
    icon: <IoStar />,
    element: <WorkInProgress />
  },
  {
    path: "/settings",
    icon: <IoSettingsOutline />,
    element: <WorkInProgress />
  }
];

export default routes;
