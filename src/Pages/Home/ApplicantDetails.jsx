/* eslint-disable react/prop-types */
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Auth/Hook/useAxiosPublic";
import useAuth from "../../Auth/Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Auth/Hook/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// imgbb for upload image
const imgbb_key = import.meta.env.VITE_Imgbb_Key;
const imgbb_api = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

const ApplicantDetails = ({ scholarshipData }) => {
  // useHooks
  const { users } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    _id: id,
    universityName,
    scholarshipCategory,
    subjectCategory,
    universityCity,
    universityCountry,
    applicationFees,
    serviceCharge,
    scholarshipName,
    deadline,
  } = scholarshipData || {};

  // get UserId
  const { data: userId = "" } = useQuery({
    queryKey: ["userId"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/usersId/${users?.email}`);
      return res.data._id;
    },
  });

  // handleSubmit
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (formData) => {
    const {
      applicantCountry,
      applicantDistrict,
      gender,
      applyingDegree,
      phoneNumber,

      sscResult,
      hscResult,
      studyGap,
      university,
      subject,
      scholarship,
    } = formData;

    // upload image in imgbb and get url
    const data = new FormData();
    data.append("image", formData.applicantPhoto[0]);
    const res = await axiosPublic.post(imgbb_api, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const status = "Pending";
    const scholarshipId = id;
    const email = users?.email;
    const name = users?.displayName;
    const feedback = "No Feedback Given Yet."
    const applicantPhoto = res.data.data.display_url;
    const currentDate = new Date().toLocaleDateString();

    const applicantDetails = {
      applicantCountry,
      gender,
      applicantDistrict,
      applyingDegree,
      phoneNumber,
      applicantPhoto,

      sscResult,
      hscResult,
      studyGap,
      university,
      subject,
      scholarship,

      name,
      email,
      userId,
      status,
      scholarshipId,
      currentDate,
      universityCity,
      universityCountry,
      applicationFees,
      serviceCharge,
      feedback,
      scholarshipName,
      deadline,
    };

    if (res.data.success) {
      const applicantRes = await axiosSecure.post(
        "/appliedScholarship",
        applicantDetails
      );
      if (applicantRes.data.insertedId) {
        console.log(applicantRes.data);
        toast.success("Applied for Scholarship Successfully");
        reset();
        navigate("/");
      }
    }
  };
  return (
    <div>
      <div className="px-5 sm:w-11/12 mx-auto dark:text-black">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          {/* top */}
          <div className="flex items-center justify-center xl:flex-row flex-col gap-10">
            {/* leftside */}
            <div className="w-full sm:px-10 px-5 sm:py-24 py-14 bg-[#f9f9f9] rounded-3xl space-y-8">
              {/* title */}
              <div className="flex sm:flex-row flex-col  items-center sm:justify-start justify-center gap-5 mb-10 sm:text-left text-center">
                <div className="p-8 bg-[#0f252a] inline-block rounded-full">
                  <FaMapMarkerAlt size={35} color="#019b82" />
                </div>

                <div>
                  <h2 className="sm:text-4xl text-3xl font-bold">
                    Applicant Infomations &
                  </h2>
                  <p className="font-semibold">
                    Please fill out all applicant details here.
                  </p>
                </div>
              </div>

              {/* row-01 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="text"
                  name="applicantCountry"
                  {...register("applicantCountry")}
                  placeholder="Applicant Country"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="text"
                  name="applicantDistrict"
                  {...register("applicantDistrict")}
                  placeholder="Applicant Village & District"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* row-02 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <select
                  className="select select-bordered w-full text-base font-semibold"
                  name="gender"
                  {...register("gender")}
                  required="required"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Custom">Custom</option>
                </select>

                <select
                  className="select select-bordered w-full text-base font-semibold"
                  name="applyingDegree"
                  {...register("applyingDegree")}
                  required="required"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Applying Degree
                  </option>
                  <option value="Masters">Masters</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>

              {/* row-03 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="number"
                  name="phoneNumber"
                  {...register("phoneNumber")}
                  placeholder="Phone Number (Number)"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="file"
                  name="applicantPhoto"
                  {...register("applicantPhoto")}
                  className="file-input w-full border border-gray-300"
                  required
                />
              </div>
            </div>

            {/* rightside */}
            <div className="w-full sm:px-10 px-5 sm:py-24 py-14 bg-[#f9f9f9] rounded-3xl space-y-8">
              {/* title */}
              <div className="flex sm:flex-row flex-col  items-center sm:justify-start justify-center gap-5 mb-10 sm:text-left text-center">
                <div className="p-8 bg-[#0f252a] inline-block rounded-full">
                  <IoDocumentTextOutline size={35} color="#019b82" />
                </div>

                <div>
                  <h2 className="sm:text-4xl text-3xl font-bold">
                    Scholarship Details
                  </h2>
                  <p className="font-semibold">
                    Please fill out all scholarship details here.
                  </p>
                </div>
              </div>

              {/* row-01 */}
              <div className="flex gap-4 md:flex-row flex-col">
                <input
                  type="text"
                  name="sscResult"
                  {...register("sscResult")}
                  placeholder="SSC Result"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="text"
                  name="hscResult"
                  {...register("hscResult")}
                  placeholder="HSC Result"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* row-02 */}
              <div className="flex gap-4 md:flex-row flex-col">
                <select
                  className="select select-bordered w-full text-base font-semibold"
                  name="studyGap"
                  {...register("studyGap")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Study Gap (If have)
                  </option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Years">2 Years</option>
                  <option value="3 years">3 years</option>
                </select>

                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                  University:
                  <input
                    type="text"
                    readOnly
                    defaultValue={universityName}
                    name="university"
                    {...register("university")}
                    className="grow"
                  />
                </label>
              </div>

              {/* row-03 */}
              <div className="flex gap-4 md:flex-row flex-col">
                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                  Scholarship:
                  <input
                    type="text"
                    readOnly
                    defaultValue={scholarshipCategory}
                    name="scholarship"
                    {...register("scholarship")}
                    className="grow"
                  />
                </label>

                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                  Subject:
                  <input
                    type="text"
                    readOnly
                    defaultValue={subjectCategory}
                    name="subject"
                    {...register("subject")}
                    className="grow"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="text-center">
            <button
              type="submit"
              className="btn border-none bg-[#193b42] h-16 hover:bg-[#102930] text-white px-14 mt-12 text-lg font-semibold"
            >
              Apply for Scholarship
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantDetails;
