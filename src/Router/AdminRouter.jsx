/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Auth/Hook/useAuth";
import useRole from "../Auth/Hook/useRole";


const AdminRouter = ({children}) => {
    // useHooks
  const { users, loading } = useAuth();
  const {role, isPending} = useRole();

  // useLocation
  const location = useLocation();

  if (loading || isPending) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (users?.email && role?.admin) {
    return children;
  }
  return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
};

export default AdminRouter;