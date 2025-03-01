import { useEffect, useState } from "react";
import Navbar from "../../../Shared/Navbar";
import PageTitle from "../../../Shared/PageTitle";
import sign from "/assets/sign.svg";
import icon5 from "/assets/icon5.svg";
import icon6 from "/assets/icon6.svg";
import icon7 from "/assets/icon7.svg";

const Contact = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 80) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(/assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div
          className={
            isScroll
              ? "fixed duration-700 top-0 z-50 w-full text-white bg-[#10252a] dark:bg-[#010313] backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70"
              : ""
          }
        >
          <Navbar></Navbar>
        </div>
        <div className="pt-8 pb-20">
          <PageTitle
            heading1={"Contact"}
            heading2={"Us"}
            subHeading={"Contact Us"}
          ></PageTitle>
        </div>
      </div>

      {/* information */}
      <div className="grid lg:grid-cols-2 justify-center items-center gap-16 max-w-screen-xl mx-auto px-6 pt-36 lg:pb-36 pb-20">
        {/* left */}
        <div className="order-1 px-2">
          <h4 className="">Contact Us</h4>
          <h2 className="title-font text-4xl font-bold pt-3 pb-5">
            Are you interested in online scholarship? Contact us
          </h2>
          <p>
            Discover a variety of online scholarship opportunities designed to
            help you achieve your academic goals. Whether you’re pursuing
            undergraduate, graduate, or specialized programs, we’re here to
            guide you through the process and provide the support you need to
            apply. Reach out today for more information and expert assistance!
          </p>

          <div className="pt-10">
            <img src={sign} alt=""  className="dark:bg-white p-2 rounded"  />
            <h4 className="text-lg font-semibold pt-1">Brayden Backham</h4>
            <span>Director</span>
          </div>
        </div>

        {/* right */}
        <div className="lg:order-1 dark:text-black order-0 card bg-base-100 pt-7 sm:px-3 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
          <form className="card-body">
            <h2 className="text-4xl font-semibold">Fill out for contact</h2>
            <p className="pb-5 dark:text-white">
              We are here to help with any questions or details you need. Reach
              out today!
            </p>

            <div className="space-y-4">
              {/* name */}
              <div className="form-control">
                <input
                  type="name"
                  placeholder="Name*"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* email */}
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email*"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* subject */}
              <div className="form-control">
                <input
                  type="name"
                  placeholder="Subject"
                  className="input input-bordered"
                />
              </div>

              {/* lg */}
              <textarea
                placeholder="Message*"
                className="textarea textarea-bordered textarea-lg w-full "
                required
              ></textarea>
            </div>

            <div className="form-control mt-4 pb-10">
              <button className="btn bg-[#0f252a] hover:bg-[#0c1f24] text-white border-none ">
                Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* location */}
      <div className=" pb-36 px-3 max-w-screen-xl mx-auto ">
        <h2 className="sm:text-5xl text-4xl font-semibold text-center">
          Find our location
        </h2>
        <div className="md:grid grid-cols-3 flex justify-center items-center md:text-left text-center flex-wrap md:gap-0 gap-12 pt-10">
          {/* area */}
          <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
            <div>
              <img src={icon5} alt="" className="dark:bg-white p-2 rounded" />
            </div>
            <div>
              <h4 className="text-xl font-semibold pb-1.5">Area location</h4>
              <p className="text-sm dark:text-white">Uttara, Dhaka-1230</p>
              <p className="text-sm dark:text-white">Bangladesh</p>

              <p></p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex md:flex-row flex-col gap-4 justify-center items-center md:border-x-2">
            <div>
              <img src={icon6} alt=""  className="dark:bg-white p-2 rounded"  />
            </div>
            <div>
              <h4 className="text-xl font-semibold pb-1.5">Contact details</h4>
              <p className="text-sm dark:text-white">(+880 ) 1869618216</p>
              <p className="text-sm dark:text-white">zahid.official8@gmail.com</p>

              <p></p>
            </div>
          </div>

          {/* Opening  */}
          <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
            <div>
              <img src={icon7} alt=""  className="dark:bg-white p-2 rounded" />
            </div>
            <div>
              <h4 className="text-xl font-semibold pb-1.5">Opening hours</h4>
              <p className="text-sm dark:text-white">Monday-Friday</p>
              <p className="text-sm dark:text-white">10:30a.m-7:00p.m</p>

              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
