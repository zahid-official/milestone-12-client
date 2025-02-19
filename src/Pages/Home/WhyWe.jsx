import icon1 from "/assets/icon1.svg";
import icon2 from "/assets/icon2.svg";
import icon3 from "/assets/icon3.svg";
import icon4 from "/assets/icon4.svg";

const WhyWe = () => {
  return (
    <>
      {/* Caption  */}
      <div className=" text-center pt-4 px-6">
        <h4 className="text-[#007f6b] title-font font-bold">Why We Are</h4>
        <h2 className="text-4xl font-semibold my-1.5 title-font">
          Elevate your Academic journey
        </h2>
        <p className="pt-3">
          Empowering Your Academic and Career Path with essential financial aid,
          enabling students to reach <br className="lg:block hidden" /> their
          educational goals and succeed without financial strain.
        </p>
      </div>

      {/* content */}
      <div className="sm:px-20 px-4 pt-10 flex flex-wrap justify-center items-center">
        {/* 1 */}
        <div className="text-center hover:shadow-xl duration-300 hover:-translate-y-3 cursor-text px-8 pb-10 pt-5 rounded-xl">
          <div className="flex justify-center">
            <img src={icon1} alt="" />
          </div>
          <h3 className="pt-4 font-semibold">Reach Goals</h3>
          <p className="max-w-60">Achieve your academic and career goals with ease.</p>
        </div>

        {/* 2*/}
        <div className="text-center hover:shadow-xl duration-300 hover:-translate-y-3 cursor-text px-8 pb-10 pt-5 rounded-xl">
          <div className="flex justify-center">
            <img src={icon2} alt="" />
          </div>
          <h3 className="pt-4 font-semibold">Financial Support</h3>
          <p className="max-w-60">Receive the financial aid you need to succeed.</p>
        </div>

        {/* 3 */}
        <div className="text-center hover:shadow-xl duration-300 hover:-translate-y-3 cursor-text px-8 pb-10 pt-5 rounded-xl">
          <div className="flex justify-center">
            <img src={icon3} alt="" />
          </div>
          <h3 className="pt-4 font-semibold">Study at Pace</h3>
          <p className="max-w-60">Learn at your own pace, without pressure or limits.</p>
        </div>

        {/* 4 */}
        <div className="text-center hover:shadow-xl duration-300 hover:-translate-y-3 cursor-text px-8 pb-10 pt-5 rounded-xl">
          <div className="flex justify-center">
            <img src={icon4} alt="" />
          </div>
          <h3 className="pt-4 font-semibold">Endless Opportunities</h3>
          <p className="max-w-60">Unlock endless opportunities for growth and success</p>
        </div>
      </div>
    </>
  );
};

export default WhyWe;
