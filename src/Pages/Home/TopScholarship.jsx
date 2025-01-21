import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Auth/Hook/useAxiosPublic";
import Card from "./Card";

const TopScholarship = () => {
  // useHooks
  const axiosPublic = useAxiosPublic();

  const { data: scholarship = [] } = useQuery({
    queryKey: ["scholarship"],
    queryFn: async () => {
      const res = await axiosPublic.get("/topScholarship");
      return res.data;
    },
  });

  return (
    <>
      {/* Caption  */}
      <div className=" text-center px-6 pt-44">
        <h4 className="text-[#007f6b] title-font font-bold">
          Opening Paths to Excellence
        </h4>
        <h2 className="text-5xl font-semibold my-1.5 title-font">
          Top Scholarship
        </h2>
        <p className="pt-5">
          Top Scholarships provide valuable financial support, helping students
          achieve academic success <br className="lg:block hidden" /> and pursue their educational goals
          without financial burdens.
        </p>
      </div>

      {/* cards */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 xl:max-w-[85rem] sm:max-w-[55rem] md:px-10 px-4 mx-auto mt-20 pb-40">
        {scholarship.map((card, idx) => (
          <Card key={card._id} card={card} idx={idx}></Card>
        ))}
      </div>
    </>
  );
};

export default TopScholarship;
