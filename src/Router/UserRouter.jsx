/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import useAuth from "../Auth/Hook/useAuth";
import useRole from "../Auth/Hook/useRole";

const UserRouter = ({children}) => {
    // useHooks
  const { users, loading } = useAuth();
  const {role, isPending} = useRole();

  if (loading || isPending) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (users?.email && role?.user) {
    return children;
  }
  return <Navigate to={"/login"} state={'/'}></Navigate>;
};

export default UserRouter;