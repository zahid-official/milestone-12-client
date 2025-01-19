import { NavLink, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <>
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* bar-icon */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>

            {/* Page content here */}
            <main className="p-8">
              <Outlet></Outlet>
            </main>
          </div>

          {/* drawer */}
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
              {/* Sidebar content here */}
              <h2 className="text-4xl p-4 font-bold title-font">Edify</h2>

              {/* navigation links */}
              <li>
                <NavLink to="/dashboard/userDashboard" end>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userDashboard/myApplications">
                  My Applications
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userDashboard/myReviews">
                  My Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
