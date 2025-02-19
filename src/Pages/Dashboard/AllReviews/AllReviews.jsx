import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import PageTitle from "../../../Shared/PageTitle";
import ReviewCard from "./ReviewCard";

const AllReviews = () => {
  // useHooks
  const { allReviews } = useAppliedScholarships();
  
  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(/assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="py-20">
          <PageTitle
            heading1={"Manage"}
            heading2={"Reviews"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>

      {/* all reviews */}
      <div className="dark:bg-black dark:text-white">
        <h2 className="pt-12 px-8 text-3xl font-semibold">
          Total Reviews: {allReviews.length}
        </h2>

        {/* cards */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 xl:max-w-[85rem] sm:max-w-[55rem] md:px-10 px-4 mx-auto mt-20 pb-40">
          {allReviews.map((card, idx) => (
            <ReviewCard key={card._id} card={card} idx={idx}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
