import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Home from "../Pages/Home/Home";
import AddScholarship from "../Pages/AddScholarship/AddScholarship";
import DashboardLayout from "../Layout/DashboardLayout";
import MyProfile from "../Pages/Dashboard/MyProfile";
import MyApplications from "../Pages/Dashboard/MyApplications";
import MyReviews from "../Pages/Dashboard/MyReviews";
import AllScholarships from "../Pages/Dashboard/AllScholarships";
import AppliedScholarships from "../Pages/Dashboard/AppliedScholarships";
import ManageReviews from "../Pages/Dashboard/ManageReviews";
import ManageUsers from "../Pages/Dashboard/ManageUsers";

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
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "myApplications",
        element: <MyApplications></MyApplications>,
      },
      {
        path: "myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "addScholarship",
        element: <AddScholarship></AddScholarship>,
      },
      {
        path: "allScholarships",
        element: <AllScholarships></AllScholarships>
      },
      {
        path: "appliedScholarships",
        element: <AppliedScholarships></AppliedScholarships>
      },
      {
        path: "manageReviews",
        element: <ManageReviews></ManageReviews>
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>
      },
    ],
  },
]);

export default Routes;
