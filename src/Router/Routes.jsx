import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Home from "../Pages/Home/Home";
import AddScholarship from "../Pages/AddScholarship/AddScholarship";
import DashboardLayout from "../Layout/DashboardLayout";
import MyProfile from "../Pages/Dashboard/Profile/MyProfile";
import MyApplications from "../Pages/Dashboard/MyApplications/MyApplications";
import MyReviews from "../Pages/Dashboard/MyReviews/MyReviews";
import AllScholarships from "../Pages/Dashboard/AllScholarships/AllScholarships";
import AppliedScholarships from "../Pages/Dashboard/AppliedScholarships/AppliedScholarships";
import AllReviews from "../Pages/Dashboard/AllReviews/AllReviews";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AdminRouter from "./AdminRouter";
import ModeratorRouter from "./ModeratorRouter";
import ScholarshipDetails from "../Pages/Home/ScholarshipDetails";
import Payment from "../Pages/Home/Payment";
import UserRouter from "./UserRouter";
import TotalScholarships from "../Pages/TotalScholarships.jsx/TotalScholarships";
import Contact from "../Pages/Home/Extra/Contact";
import About from "../Pages/Home/About";

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
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: (
          <PrivateRouter>
            <About></About>
          </PrivateRouter>
        ),
      },
      {
        path: "/allScholarship",
        element: (
          <PrivateRouter>
            <TotalScholarships></TotalScholarships>
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
          fetch(
            `https://edify-server.vercel.app/scholarshipDetails/${params.id}`
          ),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRouter>
            <Payment></Payment>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://edify-server.vercel.app/scholarshipDetails/${params.id}`
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
        path: "allReviews",
        element: (
          <ModeratorRouter>
            <AllReviews></AllReviews>
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
