// Auth Imports
import SignIn from "views/auth/SignIn";
import DashboardLayout from "../layouts/dashboard";
import DefaultLayout from "../layouts/home";
import Home from "./Home";
// import Authenticate from "./Authentication";
const routes = [
  // {
  //   path: "/",
  //   exact: true,
  //   layout: DefaultLayout,
  //   component: Home,
  // },
  {
    path: "/",
    exact: true,
    layout: DashboardLayout,
    component: Home,
  },
  {
    path: "/login",
    exact: true,
    layout: null,
    component: SignIn,
  },

  // {
  //   path: "/auth/:section",
  //   layout: DefaultLayout,
  //   component: Authenticate,
  // },
  // {
  //   path: "/dashboard",
  //   layout: DashboardLayout,
  //   component: Dashboard,
  // },
  // {
  //   path: "/dashboard/:section",
  //   layout: DashboardLayout,
  //   component: Dashboard,
  // },
  // {
  //   path: "/dashboard/projects/:id",
  //   layout: DashboardLayout,
  //   component: CompleteProject,
  // },
  // {
  //   path: "/projects",
  //   layout: DefaultLayout,
  //   component: Projects,
  // },
  // {
  //   path: "/projects/:id",
  //   layout: DefaultLayout,
  //   component: Projects,
  // },
  // {
  //   path: "*",
  //   layout: DefaultLayout,
  //   component: Home,
  // },
];

export default routes;
