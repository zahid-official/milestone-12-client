import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import PageTitle from "../../../Shared/PageTitle";
import Applied from "./Applied";

const AppliedScholarships = () => {
  // useHooks
  const {appliedScholarships} = useAppliedScholarships();
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

      {/* applied Scholarships */}
      <div>
        <h2 className="pt-12 px-8 text-3xl font-semibold">
          Total Scholarships: {appliedScholarships.length}
        </h2>

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
              {appliedScholarships.map((scholarship, idx) => (
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
    </div>
  );
};

export default AppliedScholarships;
