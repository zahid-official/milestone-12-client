/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PageTitle = ({ heading1, heading2, subHeading }) => {
  return (
    <>
      {/* titles */}
      <div className="text-center px-4 py-14">
        <h2 className="sm:text-6xl text-4xl font-light">
          {heading1} <span className="font-bold">{heading2}</span>
        </h2>
        <p className="text-lg mt-2">
          <Link
            to="/"
            className="hover:text-[#015d4e] transition-all duration-300 font-bold"
          >
            Home
          </Link>{" "}
          {">"} {subHeading}
        </p>
      </div>
    </>
  );
};

export default PageTitle;
