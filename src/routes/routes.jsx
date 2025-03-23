import Blog from "../pages/Blog/Blog";
import About from "../pages/Blog/BlogContent/AllContent/About/About";
import Docs from "../pages/Docs/Docs";
import Ecosystem from "../pages/Ecosystem/Ecosystem";
import Explorer from "../pages/Explorer/Explorer";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/LightNode/Dashboard";

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
  {
    path: "/explorer",
    component: Explorer,
  },
  {
    path: "/lightnode",
    component: Dashboard,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/blog/:content",
    component: Blog,
  },
  {
    path: "/blog/about",
    component: About,
  },
];
