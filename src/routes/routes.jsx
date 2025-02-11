import Docs from "../pages/Docs/Docs";
import Ecosystem from "../pages/Ecosystem/Ecosystem";
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
  {
    path: "/ecosystem",
    component: Ecosystem,
  },
];
