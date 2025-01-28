
import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import PageTitle from "../../../Shared/PageTitle";

import ManageApplication from "./ManageApplication";

const MyApplications = () => {
  // useHooks
  const { myScholarships } = useAppliedScholarships();




  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(/assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="py-20">
          <PageTitle
            heading1={"My"}
            heading2={"Applications"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>

      {/* my applied scholarships */}
      <div>
        <h2 className="pt-12 px-8 text-3xl font-semibold">
          Total Applied: {myScholarships.length}
        </h2>

        {/* table */}
        <div className="overflow-x-auto mt-8 px-6">
          <table className="table border">
            {/* head */}
            <thead>
              <tr className="bg-gray-200 text-base">
                <th>No.</th>
                <th>University</th>
                <th>Degree</th>
                <th>Charges</th>
                <th>Status</th>
                <th>Admin Feedback</th>
                <th>Give Review</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myScholarships.map((scholarship, idx) => (
                <ManageApplication key={scholarship._id} scholarship={scholarship} idx={idx}></ManageApplication>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
