import { IoDocumentTextOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import useAuth from "../../Auth/Hook/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Auth/Hook/useAxiosPublic";
import useAxiosSecure from "../../Auth/Hook/useAxiosSecure";
import { toast } from "react-toastify";

// imgbb for upload image
const imgbb_key = import.meta.env.VITE_Imgbb_Key;
const imgbb_api = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

const Scholarship = () => {
  // useHooks
  const { users } = useAuth();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure();

  // handleSubmit
  const { register, handleSubmit, reset  } = useForm();
  const onSubmit = async (formData) => {

    // upload image in imgbb and get url
    const data = new FormData();
    data.append("image", formData.universityLogo[0]);

    const res = await axiosPublic.post(imgbb_api, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const universityLogo = res.data.data.display_url;
    const {
      applicationFees,
      deadline,
      degree,
      description,
      postedDate,
      postedUser,
      scholarshipCategory,
      scholarshipName,
      serviceCharge,
      stipend,
      subjectCategory,
      tuitionFee,
      universityCity,
      universityCountry,
      universityName,
      universityRank,
    } = formData;
    
    const scholarshipDetails = {
      applicationFees: parseInt(applicationFees),
      deadline,
      degree,
      description,
      postedDate,
      postedUser,
      scholarshipCategory,
      scholarshipName,
      serviceCharge: parseInt(serviceCharge),
      stipend: parseInt(stipend),
      subjectCategory,
      tuitionFee: parseInt(tuitionFee),
      universityCity,
      universityLogo,
      universityCountry,
      universityName,
      universityRank: parseInt(universityRank),
    };

    if(res.data.success){
      const scholarshipRes = await axiosSecure.post('/addScholarship', scholarshipDetails);
      if(scholarshipRes.data.insertedId){
        console.log(scholarshipRes.data);
        toast.success('Scholarship Added Successfully');
        reset();
      }
    }
  };

  return (
    <>
      <div className="px-5 sm:w-11/12 mx-auto py-36 dark:text-black">
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
                    University Infomations &
                  </h2>
                  <p className="font-semibold">
                    Please fill out all university details here.
                  </p>
                </div>
              </div>

              {/* row-01 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="text"
                  name="universityName"
                  {...register("universityName", { required: true })}
                  placeholder="University Name"
                  className="input input-bordered w-full text-base font-semibold"
                />

                <input
                  type="text"
                  name="universityCountry"
                  {...register("universityCountry", { required: true })}
                  placeholder="University Country"
                  className="input input-bordered w-full text-base font-semibold"
                />
              </div>

              {/* row-02 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="text"
                  name="universityCity"
                  {...register("universityCity", { required: true })}
                  placeholder="University City"
                  className="input input-bordered w-full text-base font-semibold"
                />

                <input
                  type="number"
                  name="universityRank"
                  {...register("universityRank")}
                  placeholder="University Rank (Number)"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* row-03 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="number"
                  name="serviceCharge"
                  {...register("serviceCharge")}
                  placeholder="Service Charge (Number)"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="number"
                  name="tuitionFee"
                  {...register("tuitionFee")}
                  placeholder="Tuition Fees (Number)"
                  className="input input-bordered w-full text-base font-semibold"
                />
              </div>

              {/* row-04 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="number"
                  name="stipend"
                  {...register("stipend")}
                  placeholder="Stipend (Number)"
                  className="input input-bordered w-full text-base font-semibold"
                />

                <input
                  type="file"
                  name="universityLogo"
                  {...register("universityLogo")}
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
                  name="scholarshipName"
                  {...register("scholarshipName")}
                  placeholder="Scholarship Name"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="number"
                  name="applicationFees"
                  {...register("applicationFees")}
                  placeholder="Application Fees (Number)"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* row-02 */}
              <div className="flex gap-4 md:flex-row flex-col">
                <select
                  className="select select-bordered w-full text-base font-semibold"
                  name="subjectCategory"
                  {...register("subjectCategory")}
                  required="required"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Subject Category
                  </option>
                  <option value="Doctor">Doctor</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Engineering">Engineering</option>
                </select>

                <select
                  className="select select-bordered w-full text-base font-semibold"
                  required="required"
                  name="degree"
                  {...register("degree")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Degree
                  </option>
                  <option value="Masters">Masters</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>

              {/* row-03 */}
              <div className="flex gap-4 md:flex-row flex-col">
                <select
                  className="select select-bordered w-full text-base font-semibold"
                  name="scholarshipCategory"
                  {...register("scholarshipCategory")}
                  required="required"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Scholarship Category
                  </option>
                  <option value="Partial">Partial</option>
                  <option value="Full Fund">Full Fund</option>
                  <option value="Self Fund">Self Fund</option>
                </select>

                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                  Deadline:
                  <input
                    type="date"
                    name="deadline"
                    {...register("deadline")}
                    className="grow"
                    required
                  />
                </label>
              </div>

              {/* row-04 */}
              <div className="flex gap-4 md:flex-row flex-col">
                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                  User:
                  <input
                    type="text"
                    readOnly
                    defaultValue={users?.email}
                    name="postedUser"
                    {...register("postedUser")}
                    className="grow"
                  />
                </label>

                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                  Posted Date:
                  <input
                    type="date"
                    name="postedDate"
                    {...register("postedDate")}
                    className="grow"
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="sm:px-10 px-6 sm:py-16 py-8 bg-[#f9f9f9] rounded-3xl text-center">
            <textarea
              rows={"4"}
              name="description"
              {...register("description")}
              placeholder="Description..."
              className="textarea textarea-bordered textarea-lg w-full"
              required
            ></textarea>

            <button
              type="submit"
              className="btn bg-[#193b42] h-16 hover:bg-[#102930] text-white px-14 mt-12 text-lg font-semibold"
            >
              Add Scholarship
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Scholarship;
