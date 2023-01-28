// Auth Imports
import { Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard/Dashbord";
import SignIn from "../views/auth/SignIn";
import Home from "./Home";
// import Authenticate from "./Authentication";
const routes = [
  {
    path: "/login",
    exact: true,
    layout: SignIn,
    component: SignIn,
  },
  {
    path: "/d/:section",
    exact: true,
    layout: DashboardLayout,
    component: Home,
  },  {
    path: "/d",
    exact: true,
    layout: DashboardLayout,
    component: ()=><Navigate to="/d/main" />,
  },
  {
    path: "/",
    exact: true,
    layout: null,
    component: Home,
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
