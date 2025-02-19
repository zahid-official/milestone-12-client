import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import useAuth from "../../../Auth/Hook/useAuth";
import useRole from "../../../Auth/Hook/useRole";
import PageTitle from "../../../Shared/PageTitle";
import Chart from "./Chart";
import profileBg from "/assets/profile.webp";
import profile from "/assets/profile.png";

const MyProfile = () => {
  // useHooks
  const { role } = useRole();
  const { users } = useAuth();
  const { myScholarships, myReviews } = useAppliedScholarships();

  const { email: userEmail, displayName } = users || {};
  const { email, name, applicantPhoto, applicantDistrict, applicantCountry, phoneNumber } =
    myScholarships[0] || {};

  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(/assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="py-20">
          <PageTitle
            heading1={"My"}
            heading2={"Profile"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>

      {/* profile */}
      <div className="px-4 py-24 grid xl:grid-cols-3 gap-6">
        {/* card */}
        <div className="border pb-14 w-full max-w-sm mx-auto flex flex-col items-center gap-2 justify-center rounded-2xl">
          {/* bg */}
          <div className="h-64 w-full">
            <img
              src={profileBg}
              className="h-full w-full rounded-t-2xl"
              alt=""
            />
          </div>

          {/* profile photo */}
          <div className="h-36 w-36 -mt-[215px] mb-2 bg-white rounded-full">
            <img
              src={applicantPhoto || profile}
              className="rounded-full h-full w-full p-1 object-contain border"
              alt=""
            />
          </div>

          <h3 className="text-2xl font-semibold title-font mt-16">
            {name || displayName}
          </h3>
          <p className="-mt-1.5 text-lg">{email || userEmail}</p>
          {applicantCountry && (
            <p className="-mt-1.5 text-sm">
              {applicantDistrict}, {applicantCountry}
            </p>
          )}

          {phoneNumber && <p className="-mt-1.5 text-sm">{phoneNumber}</p>}

          {(role.admin || role.moderator) && (
            <p className="mt-0.5">
              <span className="font-semibold">Role:</span>{" "}
              {role.admin && "Admin"} {role.moderator && "Moderator"}
            </p>
          )}

          <div className="flex justify-around mt-6 w-full max-w-80">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-semibold">{myScholarships.length}</p>
              <p>Applied</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-semibold">{myReviews.length}</p>
              <p>Reviews</p>
            </div>
          </div>
        </div>

        <div className="h-full xl:col-span-2 2xl:mr-10 max-h-[480px] rounded-xl overflow-hidden">
          <Chart></Chart>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
