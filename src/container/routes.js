// Auth Imports
import { Navigate } from "react-router-dom";
import AuthIllustration from "../layouts/auth/Default";
import DashboardLayout from "../layouts/dashboard/Dashbord";
import DefaultLayout from "../layouts/home/DefaultLayout";
import Register from "../views/auth/Register";
import SignIn from "../views/auth/SignIn";
import Dashboard from "./Dashboard";
import Details from "./Details";
import Home from "./Home";
// import Authenticate from "./Authentication";
const routes = [
  {
    path: "/login",
    exact: true,
    layout: AuthIllustration,
    component: SignIn,
  },
  {
    path: "/register",
    exact: true,
    layout: AuthIllustration,
    component: Register,
  },
  {
    path: "/forgot-password",
    exact: true,
    layout: AuthIllustration,
    component: SignIn,
  },
  {
    path: "/d/details/:id",
    exact: false,
    layout: DashboardLayout,
    component: Details,
  },
  {
    path: "/d/:section",
    exact: false,
    layout: DashboardLayout,
    component: Dashboard,
  },
  {
    path: "/d",
    exact: true,
    layout: DashboardLayout,
    component: () => <Navigate to="/d/main" />,
  },
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
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
