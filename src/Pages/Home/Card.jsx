/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ card, idx }) => {
  const {
    _id: id,
    universityName,
    universityLogo,
    scholarshipCategory,
    applicationFees,
    deadline,
    universityCity,
    universityCountry,
    subjectCategory,
  } = card;

  return (
    <>
      <div className="justify-self-center bg-[#f6f6f6] w-full bg-[url(/assets/bg-2.png)] bg-cover sm:px-10 px-7 sm:py-14 py-10 rounded-xl flex flex-col justify-between items-start space-y-8 max-w-[26rem] custom-card">
        {/* img */}
        <div className="flex items-center justify-between w-full">
          <div className="h-16 w-16">
            <img
              src={universityLogo}
              alt="flag"
              className="w-full h-full object-cover rounded-[50%]"
            />
          </div>
          <div className="flex items-center gap-1 ">
            <FaStar size={25} color="#ffc808"></FaStar>
            <span className="font-semibold title-font text-lg">5.0</span>
          </div>
        </div>

        {/* content */}
        <div className="pb-2">
          <div className="flex items-center gap-1">
            <div className="h-[1px] w-10 bg-[#83cd20]"></div>
            <p className="font-semibold text-[#034833]">0{idx + 1}</p>
          </div>

          <h2 className="text-3xl mb-4 font-bold text-[#034833]">
            {universityName}
          </h2>
          <div className="space-y-1.5">
            <p className="text-[#185744]">
              <span className="font-semibold">Fee: </span>${applicationFees}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Subject: </span>
              {subjectCategory}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Scholarship: </span>
              {scholarshipCategory}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Deadline: </span>
              {deadline}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Location: </span>
              {universityCity}
              {", "}
              {universityCountry}
            </p>
          </div>
        </div>

        {/* button */}
        <Link to={`/visaDetails/${id}`} className="w-full">
          <button className="btn w-full h-14 px-10 font-bold text-[#185744] bg-white hover:bg-[#193b42] hover:text-white transition-all duration-500 rounded-full">
            More Details <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Card;
