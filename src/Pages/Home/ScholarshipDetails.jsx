import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import PageTitle from "../../Shared/PageTitle";
import Stories from "./Stories";


const ScholarshipDetails = () => {

  // useLoaderData
  const loadedData = useLoaderData();

  const {
    _id: id,
    universityName,
    universityLogo,
    scholarshipCategory,
    universityCountry,
    universityCity,
    deadline,
    subjectCategory,
    description,
    stipend,
    postedDate,
    serviceCharge,
    applicationFees,
  } = loadedData;



  

  return (
    <>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(/assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="pt-8 pb-20">
          <PageTitle
            heading1={"Scholarship"}
            heading2={"Details"}
            subHeading={"Details"}
          ></PageTitle>
        </div>
      </div>

      {/* details */}
      <div className="hero pt-40 ">
        <div className="hero-content gap-10 flex-col lg:flex-row w-full">
          <div className="flex-1 lg:shadow-none sm:shadow shadow-lg lg:px-0 sm:px-16 flex justify-center">
            <img src={universityLogo} className="sm:max-w-sm" />
          </div>

          <div className="flex-1 px-4 space-y-1.5">
            {/* heading */}
            <div className="space-y-2">
              <h1 className="sm:text-5xl text-4xl font-bold">
                {universityName}
              </h1>
              <p className="font-semibold sm:text-xl">
                Scholarship: {scholarshipCategory}
              </p>
              <p className="font-semibold sm:text-lg">
                Apply Fee: ${applicationFees}
              </p>
            </div>

            <br />

            <p>
              <span className="font-semibold">Subject: </span>
              {subjectCategory}
            </p>

            <p>
              <span className="font-semibold">Stipend: </span>${stipend}
            </p>
            <p>
              <span className="font-semibold">Service Charge: </span>$
              {serviceCharge}
            </p>

            <p>
              <span className="font-semibold">Deadline: </span>
              {deadline}
            </p>
            <p>
              <span className="font-semibold">Posted Date: </span>
              {postedDate}
            </p>
            <p className="">
              <span className="font-semibold">Location: </span>
              {universityCity}, {universityCountry}
            </p>

            <Link to={`/payment/${id}`}>
              <button className="btn font-bold mt-10 px-12 h-16 bg-[#193b42] border-none hover:bg-[#102930] text-lg text-white">
                <span className="z-10">Apply for Scholarship</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="pb-32 lg:pt-20 pt-12 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-semibold">Description</h2>
        <span className="bg-[#22a45a] w-[105px] h-[2.5px] mt-1 block"></span>
        <p className="mt-6">{description}</p>
      </div>

      {/* Scholarship Review */}
      <div className="pb-40 px-6 text-center">
        <h2 className="text-4xl font-semibold inline-flex flex-col items-end">
          Stories from Applicants
          <span className="bg-[#22a45a] w-[199px] h-[3.5px] mt-2.5 block"></span>
        </h2>

        <div className="px-6 max-w-screen-xl mx-auto pt-10">
          <Stories id={id}></Stories>
        </div>
      </div>
    </>
  );
};

export default ScholarshipDetails;
