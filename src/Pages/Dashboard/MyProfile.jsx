import useAppliedScholarships from "../../Auth/Hook/useAppliedScholarships";
import useAuth from "../../Auth/Hook/useAuth";
import PageTitle from "../../Shared/PageTitle";
import profileBg from "/assets/profile.webp";

const MyProfile = () => {
  // useHooks
  const { users } = useAuth();
  const { appliedScholarships } = useAppliedScholarships();

  const { email: userEmail, displayName, photoURL } = users || {};
  const {
    email,
    name,
    applicantPhoto,
    applicantDistrict,
    applicantCountry,
  } = appliedScholarships[0] || {};

  console.log(appliedScholarships[0]);

  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="p-20">
          <PageTitle
            heading1={"My"}
            heading2={"Profile"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>

      {/* profile */}
      <div className="px-6 py-24 grid grid-cols-3">
        {/* card */}
        <div className="border pb-14 w-full max-w-sm mx-auto flex flex-col items-center gap-2 justify-center rounded-2xl">
          <div className="h-64 w-full">
            <img
              src={profileBg}
              className="h-full w-full rounded-t-2xl"
              alt=""
            />
          </div>
          <div className="h-36 w-36 -mt-[215px] mb-2 bg-white rounded-full">
            <img
              src={applicantPhoto || photoURL}
              className="rounded-full h-full w-full p-1 object-contain border"
              alt=""
            />
          </div>

          <h3 className="text-2xl font-semibold title-font mt-16">
            {name || displayName}
          </h3>
          <p className="-mt-1.5 text-lg">{email || userEmail}</p>
          <p className="-mt-1.5 text-sm">
            {applicantDistrict}, {applicantCountry}
          </p>

          <div className="flex justify-around mt-6 w-full max-w-80">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-semibold">
                {appliedScholarships.length}
              </p>
              <p>Applied</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-semibold">
                {appliedScholarships.length}
              </p>
              <p>Reviews</p>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;
