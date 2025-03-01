import img from "/assets/weOffer.webp";
import video from "/assets/weOffer.mp4";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const WeOffers = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="sm:px-20 px-4 ">
      {/* Caption  */}
      <div className=" text-center px-6 lg:pb-6">
        <h4 className="font-semibold text-lg">What We Offer</h4>
        <h2 className="text-4xl font-semibold my-1.5 title-font">
          Top-tier education anywhere
        </h2>
      </div>

      {/* content */}
      <div className="grid lg:grid-cols-2 gap-10 pt-4">
        {/* left */}
        <div className="grid sm:grid-cols-5 items-center gap-5 order-1">
          <div className="sm:col-span-2">
            <section
              ref={sectionRef}
              className="overflow-hidden xl:rounded-tl-[40px] sm:rounded-none rounded-xl sm:pb-32"
            >
              <video
                ref={videoRef}
                width="100%"
                autoPlay
                muted
                loop
                playsInline
                controlsList="nodownload"
                className="sm:scale-[2.3] h-full sm:pt-[48px] sm:pr-3.5"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>
          </div>

          <div className="sm:col-span-3">
            <img src={img} alt="" className="rounded-xl w-full" />
          </div>
        </div>

        {/* right */}
        <div className="content-center lg:order-1 order-0">
          <p className="pb-2">
            Access personalized learning experiences tailored to your unique
            goals, allowing you to focus on areas that matter most. With the
            right support, resources, and guidance, you’ll overcome challenges,
            build confidence, and achieve success in your academic journey.
          </p>

          <div className="sm:grid sm:grid-cols-3 flex justify-center items-center flex-wrap sm:gap-0 gap-16 text-center pt-6 px-3">
            <div>
              <h2 className="text-5xl font-bold title-font">150k</h2>
              <p className="pt-2.5 font-semibold">Scholarships</p>
            </div>

            <div className="sm:border-x-2 border-black">
              <h2 className="text-5xl font-bold title-font">24/7</h2>
              <p className="pt-2.5 font-semibold">Support</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold title-font">98%</h2>
              <p className="pt-2.5 font-semibold">Placement</p>
            </div>
          </div>

          <div className="bg-[#214d52] text-white px-5 py-12 rounded-xl mt-8 flex sm:justify-between justify-center sm:text-left text-center flex-wrap items-center gap-2.5">
            <div>
              <h3 className="text-xl font-bold pb-1.5">
                Still have questions?
              </h3>
              <p className="text-sm">
                Need more information? We are here to help.
              </p>
            </div>

            <Link to={'/contact'}>
              <button
                className="btn px-5 sm:mt-0 mt-4 rounded bg-[#0f252a] text-white
             border-none"
              >
                Ask Anytime
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffers;
