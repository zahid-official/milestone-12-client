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
import AdminRouter from "./AdminRouter";
import ModeratorRouter from "./ModeratorRouter";
import UserRouter from "./UserRouter";
import ScholarshipDetails from "../Pages/Home/ScholarshipDetails";
import Payment from "../Pages/Home/Payment";

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
        path: "/scholarshipDetails/:id",
        element: (
          <PrivateRouter>
            <ScholarshipDetails></ScholarshipDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/scholarshipDetails/${params.id}`),
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
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
        element: (
          <UserRouter>
            <MyApplications></MyApplications>
          </UserRouter>
        ),
      },
      {
        path: "myReviews",
        element: (
          <UserRouter>
            <MyReviews></MyReviews>
          </UserRouter>
        ),
      },
      {
        path: "addScholarship",
        element: (
          <ModeratorRouter>
            <AddScholarship></AddScholarship>
          </ModeratorRouter>
        ),
      },
      {
        path: "allScholarships",
        element: (
          <ModeratorRouter>
            <AllScholarships></AllScholarships>
          </ModeratorRouter>
        ),
      },
      {
        path: "appliedScholarships",
        element: (
          <ModeratorRouter>
            <AppliedScholarships></AppliedScholarships>
          </ModeratorRouter>
        ),
      },
      {
        path: "manageReviews",
        element: (
          <ModeratorRouter>
            <ManageReviews></ManageReviews>
          </ModeratorRouter>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRouter>
            <ManageUsers></ManageUsers>
          </AdminRouter>
        ),
      },
    ],
  },
]);

export default Routes;
