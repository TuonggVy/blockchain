import Docs from "../pages/Docs/Docs";
import Home from "../pages/Home/Home";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: null,
  },
  {
    path: "/docs",
    component: Docs,
    layout: null,
  },
];
