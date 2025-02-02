import { useEffect, useState } from "react";
import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import PageTitle from "../../../Shared/PageTitle";
import Applied from "./Applied";
import useAxiosSecure from "../../../Auth/Hook/useAxiosSecure";

const AppliedScholarships = () => {
  // useHooks
  const { appliedScholarships } = useAppliedScholarships();
  const axiosSecure = useAxiosSecure();

  // state for filter
  const [filteredData, setFilteredData] = useState(appliedScholarships);

  // handleFilter
  const handleFilter = async (date) => {
    const res = await axiosSecure.get(`/filterDate/${date}`);
    setFilteredData(res.data);
    console.log(res.data);
  };

  // for filterData
  useEffect(() => {
    setFilteredData(appliedScholarships);
  }, [appliedScholarships]);

  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(/assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="py-20">
          <PageTitle
            heading1={"Applied"}
            heading2={"Scholarships"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>

      {/* Applied */}
      <div className="flex items-center justify-between flex-wrap pt-10">
        <h2 className="p-6 text-3xl font-semibold">
          Total Applied: {appliedScholarships.length}
        </h2>

        {/* dropdown */}
        <div className=" h-8 w-64 relative">
          <details className="dropdown px-6 absolute -left-[0]">
            <summary className="btn m-1 text-lg font-bold">
              Filter by Date
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-3 space-y-3 shadow">
              <li>
                <button
                  className="btn"
                  onClick={() => handleFilter("currentDate")}
                >
                  Applied date
                </button>
              </li>
              <li>
                <button
                  className="btn"
                  onClick={() => handleFilter("deadline")}
                >
                  Deadline
                </button>
              </li>
            </ul>
          </details>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto mt-8 px-6">
        <table className="table border">
          {/* head */}
          <thead>
            <tr className="bg-gray-200 text-base">
              <th>No.</th>
              <th>University</th>
              <th>Scholarship</th>
              <th>Subject</th>
              <th>Degree</th>
              <th>Apply Fees</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((scholarship, idx) => (
              <Applied
                key={scholarship._id}
                scholarship={scholarship}
                idx={idx}
              ></Applied>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedScholarships;
