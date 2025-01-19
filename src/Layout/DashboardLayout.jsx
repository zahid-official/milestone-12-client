import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="lg:flex">
        {/* outlet */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
