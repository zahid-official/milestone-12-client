import banner1 from "/assets/banner1.webp";
import banner2 from "/assets/banner2.webp";
import banner3 from "/assets/banner3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination, EffectFade } from "swiper/modules";

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectFade]}
        className="mySwiper min-h-[88vh]"
      >
        {/* slider-01 */}
        <SwiperSlide>
          <div className="hero sm:py-8 py-3">
            <div className="hero-content max-w-[1350px] gap-10 flex-col lg:flex-row">
              {/* part-01 */}
              <div className="flex-1 flex justify-center items-center rounded-3xl">
                <div className="overflow-hidden">
                  <img
                    src={banner1}
                    className="w-full lg:max-w-full sm:max-w-xl"
                  />
                </div>
              </div>

              {/* part-02 */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="font-bold sm:text-lg">
                    Scholarship Opportunities
                  </h5>
                </div>
                <h1 className="sm:text-6xl text-4xl pb-3 font-semibold sm:leading-[70px] tracking-tight">
                  Explore More then{" "}
                  <span className="text-[#ffb606]">1000+ </span>Scholarships{" "}
                  <br className="lg:block hidden" /> & Universities
                </h1>
                <p>
                Explore the best scholarships and universities that align with your academic interests and career goals. Apply with ease and take the next step toward achieving your educational dreams.
                </p>
                <Link to={"/"}>
                  <button className="btn bg-[#0f252a] border-[#3f5155] hover:border-[#3f5155] rounded-none px-8 hover:bg-[#0c1f24] text-white mt-7 text-lg font-semibold">
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slider-02 */}
        <SwiperSlide>
          <div className="hero sm:py-8 py-3">
            <div className="hero-content max-w-[1350px] gap-10 flex-col lg:flex-row">
              {/* part-01 */}
              <div className="flex-1 flex justify-center items-center rounded-3xl">
                <div className="overflow-hidden">
                  <img
                    src={banner2}
                    className="w-full rounded-b-[50px] lg:max-w-full sm:max-w-xl"
                  />
                </div>
              </div>

              {/* part-02 */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="font-bold sm:text-lg">Search Scholarships</h5>
                </div>
                <h1 className="sm:text-6xl text-4xl pb-3 font-semibold sm:leading-[70px] tracking-tight">
                  Find Scholarship{" "}
                  <span className="text-[#ffb606]">Opportunities </span>for
                  Preferred Universities
                </h1>
                <p>
                Our system helps you find scholarships that match your academic background, interests, and career goals. Save time with a personalized search tool, highlighting the best opportunities for you.
                </p>
                <Link to={"/"}>
                  <button className="btn bg-[#0f252a] border-[#3f5155] hover:border-[#3f5155] rounded-none px-8 hover:bg-[#0c1f24] text-white mt-7 text-lg font-semibold">
                    Find Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slider-03 */}
        <SwiperSlide>
          <div className="hero sm:py-8 py-3">
            <div className="hero-content max-w-[1350px] gap-10 flex-col lg:flex-row">
              {/* part-01 */}
              <div className="flex-1 flex justify-center items-center rounded-3xl">
                <div className="overflow-hidden">
                  <img
                    src={banner3}
                    className="w-full rounded-b-[50px] lg:max-w-full sm:max-w-xl"
                  />
                </div>
              </div>

              {/* part-02 */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="font-bold sm:text-lg">Manage Applications</h5>
                </div>
                <h1 className="sm:text-6xl text-4xl pb-3 font-semibold sm:leading-[70px] tracking-tight">
                  Simple Scholarship
                  <span className="text-[#ffb606]"> Application </span>
                  Process Made Easy
                </h1>
                <p>
                Apply to multiple scholarships through a single platform, easily manage and track the status of your applications, and receive timely reminders to ensure you never miss an important deadline or opportunity.
                </p>
                <Link to={"/"}>
                  <button className="btn bg-[#0f252a] border-[#3f5155] hover:border-[#3f5155] rounded-none px-8 hover:bg-[#0c1f24] text-white mt-7 text-lg font-semibold">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
