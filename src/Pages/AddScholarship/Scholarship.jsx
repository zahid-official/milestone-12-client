import { IoDocumentTextOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import useAuth from "../../Auth/Hook/useAuth";

const Scholarship = () => {
  // useContext
  const { users } = useAuth();

  // imgbb for upload image
  // const imgbb_key = import.meta.env.VITE_Imgbb_Key;
  // const imgbb_api = `https://api.imgbb.com/1/upload${imgbb_key}`;

  // handleSubmit
  const handleSubmit = async(event) => {
    event.preventDefault();

    // upload image to imgbb
    // const res = await axios.post(imgbb_api)

    const universityName = event.target.universityName.value;
    const universityCountry = event.target.universityCountry.value;
    const universityCity = event.target.universityCity.value;
    const universityRank = event.target.universityRank.value;
    const serviceCharge = event.target.serviceCharge.value;
    const tuitionFee = event.target.tuitionFee.value;
    const stipend = event.target.stipend.value;
    const universityLogo = event.target.universityLogo.value;

    const scholarshipName = event.target.scholarshipName.value;
    const applicationFees = event.target.applicationFees.value;
    const subjectCategory = event.target.subjectCategory.value;
    const scholarshipCategory = event.target.scholarshipCategory.value;
    const degree = event.target.degree.value;
    const deadline = event.target.deadline.value;
    const userEmail = users?.email;
    const postedDate = event.target.postedDate.value;
    const description = event.target.description.value;

    const addVisaData = {
      universityName,
      universityCountry,
      universityCity,
      universityRank,
      serviceCharge,
      tuitionFee,
      stipend,
      universityLogo,

      scholarshipName,
      subjectCategory,
      scholarshipCategory,
      applicationFees,
      degree,
      deadline,
      userEmail,
      postedDate,
      description
    };

    console.log(addVisaData);
  };
  

  return (
    <>
      <div className="px-5 sm:w-11/12 mx-auto py-36">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
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
                  placeholder="University Name"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="text"
                  name="universityCountry"
                  placeholder="University Country"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* row-02 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="text"
                  name="universityCity"
                  placeholder="University City"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="number"
                  name="universityRank"
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
                  placeholder="Service Charge (Number)"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="number"
                  name="tuitionFee"
                  placeholder="Tuition Fees (Number)"
                  className="input input-bordered w-full text-base font-semibold"
                />
              </div>

              {/* row-04 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="number"
                  name="stipend"
                  placeholder="Stipend (Number)"
                  className="input input-bordered w-full text-base font-semibold"
                />

                <input
                  type="file"
                  name="universityLogo"
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
                  placeholder="Scholarship Name"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="number"
                  name="applicationFees"
                  placeholder="Application Fees (Number)"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* row-02 */}
              <div className="flex gap-4 md:flex-row flex-col">
                <select
                  className="select select-bordered w-full text-base font-semibold"
                  required="required"
                  name="subjectCategory"
                  defaultValue=""
                >
                  <option value="" disabled >
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
                    className="grow"
                  />
                </label>

                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                  Posted Date:
                  <input
                    type="date"
                    name="postedDate"
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
