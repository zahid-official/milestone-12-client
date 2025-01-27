import { NavLink, Outlet } from "react-router-dom";
import useRole from "../Auth/Hook/useRole";

const DashboardLayout = () => {
  // useHook
  const { role } = useRole();

  // roles
  const user = role?.user;
  const admin = role?.admin;
  const moderator = role?.moderator;

  return (
    <>
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* bar-icon */}
            <label
              htmlFor="my-drawer-2"
              className="btn bg-transparent absolute top-4 left-3 text-white hover:text-black drawer-button lg:hidden"
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
            <main className="w-full">
              <Outlet></Outlet>
            </main>
          </div>

          {/* sidebar as drawer */}
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" end>
                  My Profile
                </NavLink>
              </li>

              {/* user */}
              {user && (
                <>
                  <li>
                    <NavLink to="/dashboard/myReviews">My Reviews</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/myApplications">
                      My Applications
                    </NavLink>
                  </li>
                </>
              )}

              {/* moderator & admin */}
              {(moderator || admin) && (
                <>
                  <li>
                    <NavLink to="/dashboard/myReviews">My Reviews</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/myApplications">
                      My Applications
                    </NavLink>
                  </li>

                  
                  <li>
                    <NavLink to="/dashboard/manageReviews">All Reviews</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allScholarships">
                      All Scholarships
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/addScholarship">
                      Add Scholarship
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/appliedScholarships">
                      Applied Scholarships
                    </NavLink>
                  </li>

                  {admin && (
                    <li>
                      <NavLink to="/dashboard/manageUsers">
                        Manage Users
                      </NavLink>
                    </li>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
