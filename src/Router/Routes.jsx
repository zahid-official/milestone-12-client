import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import PrivateInfo from "../Pages/Private/PrivateInfo";
import Home from "../Pages/Home/Home";
import AddScholarship from "../Pages/AddScholarship/AddScholarship";

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
        path: "/userDashboard",
        element: (
          <PrivateRouter>
            <h1>Route3 Page</h1>
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
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

export default Routes;
