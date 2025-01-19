import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import PrivateInfo from "../Pages/Private/PrivateInfo";
import Home from "../Pages/Home/Home";
import AddScholarship from "../Pages/AddScholarship/AddScholarship";
import DashboardLayout from "../Layout/DashboardLayout";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import MyProfile from "../Pages/UserDashboard/MyProfile";
import MyApplications from "../Pages/UserDashboard/MyApplications";
import MyReviews from "../Pages/UserDashboard/MyReviews";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allScholarship",
        element: (
          <PrivateRouter>
            <h1>All Scholarship Page</h1>
          </PrivateRouter>
        ),
      },
      {
        path: "/addScholarship",
        element: (
          <PrivateRouter>
            <AddScholarship></AddScholarship>
          </PrivateRouter>
        ),
      },
      {
        path: "/adminDashboard",
        element: (
          <PrivateRouter>
            <PrivateInfo></PrivateInfo>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "userDashboard",
        element: <UserDashboard></UserDashboard>,
        children: [
          {
            path: "",
            element: <MyProfile></MyProfile>
          },
          {
            path: "myApplications",
            element: <MyApplications></MyApplications>
          },
          {
            path: "myReviews",
            element: <MyReviews></MyReviews>
          },
        ]
      },
    ],
  },
]);

export default Routes;
