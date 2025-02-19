import { Link, NavLink, Outlet } from "react-router-dom";
import useRole from "../Auth/Hook/useRole";
import logo from "/assets/logo.png";
import { FaHome } from "react-icons/fa";
import { FaCircleUser, FaFileShield, FaFileSignature } from "react-icons/fa6";
import { SiFiles } from "react-icons/si";
import { MdRateReview } from "react-icons/md";
import { HiDocumentAdd } from "react-icons/hi";
import { IoDocumentsSharp } from "react-icons/io5";
import { PiUsersThreeFill } from "react-icons/pi";

const DashboardLayout = () => {
  // useHook
  const { role } = useRole();

  // roles
  const user = role?.user;
  const admin = role?.admin;
  const moderator = role?.moderator;

  return (
    <>
      <div className="dark:bg-black dark:text-white">
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
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 dark:bg-black dark:text-white text-base-content min-h-full w-64 p-4">
              {/* Sidebar content here */}
              <Link to={"/"}>
                <h2 className="text-4xl p-4 font-bold title-font flex items-center title-font">
                  <img src={logo} className="mr-1.5" alt="" /> Edify
                </h2>
              </Link>

              {/* navigation links */}
              <li>
                <NavLink to="/">
                  <FaHome size={23}></FaHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" end>
                  <FaCircleUser size={22}></FaCircleUser> My Profile
                </NavLink>
              </li>

              {/* user */}
              {user && (
                <>
                  <li>
                    <NavLink to="/dashboard/myReviews">
                      <FaFileSignature size={22}></FaFileSignature> My Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/myApplications">
                      <FaFileShield size={22}></FaFileShield> My Applications
                    </NavLink>
                  </li>
                </>
              )}

              {/* moderator & admin */}
              {(moderator || admin) && (
                <>
                  <li>
                    <NavLink to="/dashboard/allReviews">
                      <MdRateReview size={24} ></MdRateReview> All Reviews
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/allScholarships">
                      <SiFiles size={20} ></SiFiles> All Scholarships
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/addScholarship">
                    <HiDocumentAdd size={28} className="-mr-1 -ml-1"></HiDocumentAdd> Add Scholarship
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/appliedScholarships">
                     <IoDocumentsSharp size={22} className=""></IoDocumentsSharp> Applied Scholarships
                    </NavLink>
                  </li>

                  {admin && (
                    <li>
                      <NavLink to="/dashboard/manageUsers">
                       <PiUsersThreeFill size={22}></PiUsersThreeFill> Manage Users
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
