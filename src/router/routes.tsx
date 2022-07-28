import LinkTypes from "./Links.type";
import { ProfilePage, WorkInProgress } from "../pages";

const routes: LinkTypes[] = [
  {
    href: "/",
    imgUrl: "#",
    alt: "#",
    element: <ProfilePage/>
  },
  {
    href: "/search",
    imgUrl: "#",
    alt: "#",
    element: <WorkInProgress/>
  },
  {
    href: "/rooms",
    imgUrl: "#",
    alt: "#",
    element: <WorkInProgress/>
  },
  {
    href: "/chat",
    imgUrl: "#",
    alt: "#",
    element: <WorkInProgress/>
  },
  {
    href: "/profile/:id",
    imgUrl: "#",
    alt: "#",
    element: <WorkInProgress/>
  },
  {
    href: "/premium",
    imgUrl: "#",
    alt: "#",
    element: <WorkInProgress/>
  },
  {
    href: "/settings",
    imgUrl: "#",
    alt: "#",
    element: <WorkInProgress/>
  },
];

export default routes;
