import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import PageTitle from "../../../Shared/PageTitle";
import ManageScholarship from "./ManageScholarship";

const AllScholarships = () => {
  // useHooks
  const { allScholarships } = useAppliedScholarships();
  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(/assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="py-20">
          <PageTitle
            heading1={"All"}
            heading2={"Scholarships"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>

      {/* all scholarships */}
      <div>
        <h2 className="pt-12 px-8 text-3xl font-semibold">
          Total Scholarships: {allScholarships.length}
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
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allScholarships.map((scholarship, idx) => (
                <ManageScholarship key={scholarship._id} scholarship={scholarship} idx={idx}></ManageScholarship>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllScholarships;
