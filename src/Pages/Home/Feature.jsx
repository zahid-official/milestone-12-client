import { Link } from "react-router-dom";
import { LiaUniversitySolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import { LuBadgeCheck  } from "react-icons/lu";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { MdOutlineSupport } from "react-icons/md";

const Feature = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-10 px-6 container mx-auto">
      {/* left */}
      <div className="max-w-xl mx-auto">
        <h4 className="text-[#007f6b] title-font font-semibold">
          Simplifying Scholarship Management
        </h4>
        <h2 className="sm:text-5xl text-4xl pt-2.5 pb-6 font-semibold title-font sm:leading-[3.4rem]">
          <span className="sm:block hidden">Discover the Best Scholarships and Universities for Your Future!</span> <span className="sm:hidden block">Find the Best Scholarships and Colleges for Your Future!</span>
        </h2>

        <p>
          Explore a variety of scholarships and universities that perfectly
          align with your academic and career goals. Apply easily and take the
          first step towards a brighter future today!
        </p>

        <Link to={"/"}>
          <button className="btn bg-[#193b42] border-[#3f5155] hover:border-[#3f5155] rounded-none px-8 hover:bg-[#102930] text-white mt-7 text-lg font-semibold">
            Apply Now
          </button>
        </Link>
      </div>

      {/* right */}
      <div className="gap-7 grid max-w-2xl">
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8">
            {/* 1 */}
          <div className="inline-flex justify-center items-center flex-col sm:px-2.5 py-12 rounded-2xl text-center border-2 border-white hover:bg-white hover:rotate-6 hover:scale-[1.15] duration-500">
            <span>
              <LiaUniversitySolid size={45} color="#015d4e" />
            </span>
            <h4 className="title-font font-bold text-xl">Universities</h4>
            <p className="text-xs text-[#015d4e]">Explore top universities worldwide</p>
          </div>

            {/* 2 */}
          <div className="inline-flex justify-center items-center flex-col sm:px-2.5 py-12 rounded-2xl text-center border-2 border-white hover:bg-white hover:rotate-6 hover:scale-[1.15] duration-500">
            <span >
              <LuGraduationCap size={43} color="#015d4e" />
            </span>
            <h4 className="title-font font-bold text-xl">Scholarships</h4>
            <p className="text-xs text-[#015d4e]">Find merit and field scholarships</p>
          </div>

            {/* 3 */}
          <div className="inline-flex justify-center items-center flex-col sm:px-2.5 py-12 rounded-2xl text-center border-2 border-white hover:bg-white hover:rotate-6 hover:scale-[1.15] duration-500">
            <span className="mt-1.5">
              <MdOutlineMonitorHeart size={40} color="#015d4e" />
            </span>
            <h4 className="title-font font-bold text-xl">Monitoring</h4>
            <p className="text-xs text-[#015d4e]">Track scholarship applications</p>
          </div>

            {/* 4 */}
          <div className="inline-flex justify-center items-center flex-col sm:px-2.5 py-12 rounded-2xl text-center border-2 border-white hover:bg-white hover:rotate-6 hover:scale-[1.15] duration-500">
            <span>
              <LuBadgeCheck  size={40} color="#015d4e" />
            </span>
            <h4 className="title-font font-bold text-xl">Eligibility</h4>
            <p className="text-xs text-[#015d4e] mt-0.5">Interest based Tailored Scholarships</p>
          </div>
            
            {/* 5 */}
          <div className="inline-flex justify-center items-center flex-col sm:px-2.5 py-12 rounded-2xl text-center border-2 border-white hover:bg-white hover:rotate-6 hover:scale-[1.15] duration-500">
            <span>
              <MdOutlineSupport size={42} color="#015d4e" />
            </span>
            <h4 className="title-font font-bold text-xl">Guidance</h4>
            <p className="text-xs text-[#015d4e]">Receive guidance from experts</p>
          </div>

            {/* 6 */}
          <div className="inline-flex justify-center items-center flex-col sm:px-2.5 py-12 rounded-2xl text-center border-2 border-white hover:bg-white hover:rotate-6 hover:scale-[1.15] duration-500">
            <span className="mt-1">
              <GrResources size={38} color="#015d4e" />
            </span>
            <h4 className="title-font font-bold text-xl">Resources</h4>
            <p className="text-xs text-[#015d4e]">Tips for successful applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
