import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import PageTitle from "../../../Shared/PageTitle";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Auth/Hook/useAxiosSecure";

const MyApplications = () => {
  // useHooks
  const { myScholarships } = useAppliedScholarships();
  const axiosSecure = useAxiosSecure();

  // handleEdit
  const handleEdit = (status) => {
    if (status !== "Pending") {
      return toast.error("Editing is currently unavailable.");
    }

    document.getElementById("editApplication").showModal();
  };

  // modal editApplication
  const { register, handleSubmit } = useForm();
  const onSubmit = async (formData) => {
    const {
      applicantCountry,
      applicantDistrict,
      gender,
      applyingDegree,
      id,
      sscResult,
      hscResult,
    } = formData;

    const editData = {
      id,
      gender,
      sscResult,
      hscResult,
      applyingDegree,
      applicantCountry,
      applicantDistrict,
    };

    // fetching data
    const res = await axiosSecure.patch(`/editApplication/${id}`, editData);
    if (res.data.modifiedCount > 0) {
      toast.success("Application Updated Successfully");
      document.getElementById("editApplication").close();
    } else {
      toast.warn("No Updating Data Found!");
      document.getElementById("editApplication").close();
    }
  };


  

  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="py-20">
          <PageTitle
            heading1={"My"}
            heading2={"Applications"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>

      {/* my applied scholarships */}
      <div>
        <h2 className="pt-12 px-8 text-3xl font-semibold">
          Total Applied: {myScholarships.length}
        </h2>

        {/* table */}
        <div className="overflow-x-auto mt-8 px-6">
          <table className="table border">
            {/* head */}
            <thead>
              <tr className="bg-gray-200 text-base">
                <th>No.</th>
                <th>University</th>
                <th>Degree</th>
                <th>Charges</th>
                <th>Status</th>
                <th>Admin Feedback</th>
                <th>Give Review</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myScholarships.map((scholarship, idx) => (
                <tr key={scholarship._id}>
                  <th>{idx + 1}</th>

                  {/* university */}
                  <td>
                    <div>
                      <div className="font-bold">{scholarship.university}</div>
                      <div className="text-sm opacity-50">
                        {scholarship.universityCity},{" "}
                        {scholarship.universityCountry}
                      </div>
                    </div>
                  </td>

                  {/* degree */}
                  <td>
                    {scholarship.applyingDegree}
                    <br />
                    <span className="badge badge-ghost badge-sm bg-transparent border-none -ml-2">
                      {scholarship.subject}
                    </span>
                  </td>

                  {/* charges */}
                  <td>
                    Apply: ${scholarship.applicationFees}
                    <br />
                    <span className="badge badge-ghost badge-sm bg-transparent border-none -ml-2">
                      Service: ${scholarship.serviceCharge}
                    </span>
                  </td>

                  {/* status */}
                  <td>
                    <span className="rounded-3xl py-0.5 inline-block font-semibold px-3 bg-orange-200 border border-orange-400">
                      {scholarship.status}
                    </span>
                  </td>

                  {/* feedback */}
                  <td>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      className="btn btn-sm h-10 bg-slate-500 text-white hover:bg-slate-600"
                    >
                      See Feadback
                    </button>

                    {/* modal */}
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-2xl">
                          Feedback By Admin/Moderator
                        </h3>
                        <p className="py-4 text-lg">{scholarship.feedback}</p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>

                  {/* add review */}
                  <td>
                    <button className="btn btn-sm h-10 bg-orange-900 text-white hover:bg-orange-950">
                      Add Review
                    </button>
                  </td>

                  {/* actions */}
                  <td className="text-center space-x-2">
                    <Link
                      to={`/scholarshipDetails/${scholarship.scholarshipId}`}
                    >
                      <button className="btn bg-emerald-500 hover:bg-emerald-700 text-white">
                        <FaEye size={24}></FaEye>
                      </button>
                    </Link>

                    <button
                      onClick={() => handleEdit(scholarship.status)}
                      className="btn bg-slate-500 hover:bg-slate-700 text-white"
                    >
                      <FaPencilAlt size={24}></FaPencilAlt>

                      {/* edit application modal*/}
                      <dialog
                        id="editApplication"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col pb-10"
                          >
                            {/* top */}
                            <div className="flex items-center justify-center xl:flex-row flex-col gap-10">
                              {/* leftside */}
                              <div className="w-full sm:px-10 px-5 sm:py-14 rounded-3xl space-y-8">
                                {/* row-01 */}
                                <h2 className="text-3xl font-bold">
                                  Update Application
                                </h2>
                                <input
                                  type="text"
                                  name="applicantCountry"
                                  defaultValue={scholarship.applicantCountry}
                                  {...register("applicantCountry")}
                                  placeholder="Applicant Country"
                                  className="input input-bordered w-full text-base font-semibold"
                                />

                                <input
                                  type="text"
                                  name="applicantDistrict"
                                  defaultValue={scholarship.applicantDistrict}
                                  {...register("applicantDistrict")}
                                  placeholder="Applicant Village & District"
                                  className="input input-bordered w-full text-base font-semibold"
                                />

                                {/* row-02 */}
                                <select
                                  className="select select-bordered w-full text-base font-semibold"
                                  name="gender"
                                  {...register("gender")}
                                  defaultValue={scholarship.gender}
                                >
                                  <option value={scholarship.gender} disabled>
                                    {scholarship.gender}
                                  </option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Custom">Custom</option>
                                </select>

                                <select
                                  className="select select-bordered w-full text-base font-semibold"
                                  name="applyingDegree"
                                  {...register("applyingDegree")}
                                  defaultValue={scholarship.applyingDegree}
                                >
                                  <option
                                    value={scholarship.applyingDegree}
                                    disabled
                                  >
                                    {scholarship.applyingDegree}
                                  </option>
                                  <option value="Masters">Masters</option>
                                  <option value="Bachelor">Bachelor</option>
                                  <option value="Diploma">Diploma</option>
                                </select>

                                {/* row-03 */}
                                <input
                                  type="text"
                                  name="sscResult"
                                  defaultValue={scholarship.sscResult}
                                  {...register("sscResult")}
                                  placeholder="SSC Result"
                                  className="input input-bordered w-full text-base font-semibold"
                                />

                                <input
                                  type="text"
                                  name="hscResult"
                                  defaultValue={scholarship.hscResult}
                                  {...register("hscResult")}
                                  placeholder="HSC Result"
                                  className="input input-bordered w-full text-base font-semibold"
                                />
                              </div>
                            </div>

                            <div className="text-center">
                              <input
                                type="text"
                                defaultValue={scholarship._id}
                                {...register("id")}
                                className="hidden"
                              />

                              <button
                                type="submit"
                                className="btn bg-[#193b42] h-16 hover:bg-[#102930] text-white px-14 text-lg font-semibold"
                              >
                                Update Application
                              </button>
                            </div>
                          </form>
                        </div>
                      </dialog>
                    </button>

                    <button onClick={()=>handleDelete(scholarship._id)} className="btn bg-red-500 hover:bg-red-700 text-white">
                      <FaTrash size={24}></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
