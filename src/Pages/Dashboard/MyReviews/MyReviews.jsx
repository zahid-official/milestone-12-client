
import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import PageTitle from "../../../Shared/PageTitle";
import Review from "./Review";


const MyReviews = () => {
  // useHooks
  const { myReviews } = useAppliedScholarships();



  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="py-20">
          <PageTitle
            heading1={"My"}
            heading2={"Reviews"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>

      {/* my applied scholarships */}
      <div>
        <h2 className="pt-12 px-8 text-3xl font-semibold">
          Total Reviews: {myReviews.length}
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
                <th>Review Date</th>
                <th>Review Comment</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            {myReviews.map((review, idx) => (
                <Review key={review._id} review={review} idx={idx}></Review>
            ))}
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
