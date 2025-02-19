import { FaStar } from "react-icons/fa";

/* eslint-disable react/prop-types */
const StoryCard = ({ story, idx }) => {
  const { applicantPhoto, rating, name, reviewDate, comment } = story;

  const limit = 16;
  const words = comment.split(" ");
  const trimmed =
    words.length > limit ? words.slice(0, limit).join(" ") + " ..." : comment;

  return (
    <>
      <div className="">
        <div className="max-w-md mx-auto text-left mb-12 min-h-[60vh] bg-[#00353b] hover:scale-105 duration-500 w-full bg-[url(/assets/topScholarship.svg)] bg-cover sm:px-10 px-7 sm:py-14 py-10 rounded-2xl flex flex-col space-y-8">
          <div className="flex items-center justify-between w-full">
            {/* img */}
            <div className="h-16 w-16 border rounded-full">
              <img
                src={applicantPhoto}
                alt="flag"
                className="w-full h-full object-contain rounded-[50%]"
              />
            </div>

            {/* ratiing */}
            <div className="flex items-center gap-1 ">
              <FaStar size={25} color="#ffc808"></FaStar>
              <span className="font-semibold title-font text-lg text-white">
                {rating}
              </span>
            </div>
          </div>

          {/* content */}
          <div className="pb-2">
            <div className="flex items-center gap-1">
              <div className="h-[1px] w-10 bg-[#83cd20]"></div>
              <p className="font-semibold text-white">0{idx + 1}</p>
            </div>

            <h2 className="text-3xl mb-4 font-bold text-white">{name}</h2>
            <div className="space-y-1.5">
              <p className="text-white">
                <span className="font-semibold">Review Date: </span>
                {reviewDate}
              </p>
              <p className="text-white ">
                <span className="font-semibold"> </span>
                {trimmed}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
