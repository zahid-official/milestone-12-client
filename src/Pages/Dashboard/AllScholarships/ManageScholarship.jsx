/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import useAxiosSecure from "../../../Auth/Hook/useAxiosSecure";

const ManageScholarship = ({ scholarship, idx }) => {
  // useHooks
  const {refetchAllScholarships} = useAppliedScholarships();
  const axiosSecure = useAxiosSecure();

  // handleEdit
  const handleEdit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById(scholarship._id).showModal()
      }
    });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = async (formData) => {

    const {
      universityName,
      universityCountry,
      universityCity,
      universityRank,
      scholarshipName,
      scholarshipCategory,
      subjectCategory,
      deadline,
      degree,
      stipend,
      tuitionFee,
      serviceCharge,
      applicationFees,
    } = formData;

    const editData = {
      universityName,
      universityCountry,
      universityCity,
      universityRank,
      scholarshipName,
      scholarshipCategory,
      subjectCategory,
      deadline,
      degree,
      stipend,
      tuitionFee,
      serviceCharge,
      applicationFees,
    };

    // fetching data
    const res = await axiosSecure.patch(`/editScholarship/${scholarship._id}`, editData);
    if (res.data.modifiedCount > 0) {
      refetchAllScholarships();
      toast.success("Application Updated Successfully");
      document.getElementById(scholarship._id).close();
    } else {
      toast.warn("No Updating Data Found!");
      document.getElementById(scholarship._id).close();
    }
  };

  return (
    <>
      <tr>
        <th>{idx + 1}</th>

        {/* university */}
        <td>
          <div className="font-bold">{scholarship.universityName}</div>
        </td>

        {/* scholarshipName */}
        <td>{scholarship.scholarshipName}</td>

        {/* subjectCategory */}
        <td>{scholarship.subjectCategory}</td>

        {/* degree */}
        <td>{scholarship.degree}</td>

        {/* applicationFees */}
        <td>${scholarship.applicationFees}</td>

        {/* actions */}
        <td className="text-center space-x-2">
          {/* details */}
          <Link to={`/scholarshipDetails/${scholarship._id}`}>
            <button className="btn bg-emerald-500 hover:bg-emerald-700 text-white">
              <FaEye size={24}></FaEye>
            </button>
          </Link>

          {/* edit */}
          <button
            onClick={handleEdit}
            className="btn bg-slate-500 hover:bg-slate-700 text-white"
          >
            <FaPencilAlt size={24}></FaPencilAlt>
          </button>

          {/* delete */}
          {/* <button
            onClick={() => handleDelete(scholarship._id)}
            className="btn bg-red-500 hover:bg-red-700 text-white"
          >
            <FaTrash size={24}></FaTrash>
          </button> */}
        </td>

        {/* edit application modal*/}
        <dialog
          id={scholarship._id}
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
                  <h2 className="text-3xl font-bold">Update Scholarship</h2>

                  <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                    University:
                    <input
                      type="text"
                      name="universityName"
                      defaultValue={scholarship?.universityName}
                      {...register("universityName")}
                      placeholder="University Name"
                      className="grow"
                    />
                  </label>

                  <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                    Country:
                    <input
                      type="text"
                      name="universityCountry"
                      defaultValue={scholarship.universityCountry}
                      {...register("universityCountry")}
                      placeholder="University Country"
                      className="grow"
                    />
                  </label>

                  <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                    City:
                    <input
                      type="text"
                      name="universityCity"
                      defaultValue={scholarship.universityCity}
                      {...register("universityCity")}
                      placeholder="University City"
                      className="grow"
                    />
                  </label>

                  <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                    Scholarship:
                    <input
                      type="text"
                      name="scholarshipName"
                      defaultValue={scholarship.scholarshipName}
                      {...register("scholarshipName")}
                      placeholder="Scholarship Name"
                      className="grow"
                    />
                  </label>

                  <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                    Rank:
                    <input
                      type="text"
                      name="universityRank"
                      defaultValue={scholarship.universityRank}
                      {...register("universityRank")}
                      placeholder="University Rank"
                      className="grow"
                    />
                  </label>

                  <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                    Service: $
                    <input
                      type="text"
                      name="serviceCharge"
                      defaultValue={scholarship.serviceCharge}
                      {...register("serviceCharge")}
                      placeholder="Service Charge"
                      className="grow"
                    />
                  </label>

                  <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                    Tuition: $
                    <input
                      type="text"
                      name="tuitionFee"
                      defaultValue={scholarship.tuitionFee}
                      {...register("tuitionFee")}
                      placeholder="Tuition Fee"
                      className="grow"
                    />
                  </label>

                  <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                    Stipend: $
                    <input
                      type="text"
                      name="stipend"
                      defaultValue={scholarship.stipend}
                      {...register("stipend")}
                      placeholder="Stipend"
                      className="grow"
                    />
                  </label>

                  <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                    Apply: $
                    <input
                      type="text"
                      name="applicationFees"
                      defaultValue={scholarship.applicationFees}
                      {...register("applicationFees")}
                      placeholder="Application Fees"
                      className="grow"
                    />
                  </label>

                  {/* row-02 */}
                  <select
                    className="select select-bordered w-full text-base font-semibold"
                    name="subjectCategory"
                    {...register("subjectCategory")}
                    defaultValue={scholarship.subjectCategory}
                  >
                    <option value={scholarship.subjectCategory} disabled>
                      {scholarship.subjectCategory}
                    </option>
                    <option value="Doctor">Doctor</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Agriculture">Agriculture</option>
                  </select>

                  <select
                    className="select select-bordered w-full text-base font-semibold"
                    name="degree"
                    {...register("degree")}
                    defaultValue={scholarship.degree}
                  >
                    <option value={scholarship.degree} disabled>
                      {scholarship.degree}
                    </option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Diploma">Diploma</option>
                  </select>

                  <select
                    className="select select-bordered w-full text-base font-semibold"
                    name="scholarshipCategory"
                    {...register("scholarshipCategory")}
                    defaultValue={scholarship.scholarshipCategory}
                  >
                    <option value={scholarship.scholarshipCategory} disabled>
                      {scholarship.scholarshipCategory}
                    </option>
                    <option value="Partial">Partial</option>
                    <option value="Full Fund">Full Fund</option>
                    <option value="Self Fund">Self Fund</option>\
                  </select>

                  <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                    Deadline:
                    <input
                      type="date"
                      name="deadline"
                      defaultValue={scholarship.deadline}
                      {...register("deadline")}
                      className="grow"
                    />
                  </label>
                </div>
              </div>

              <div className="text-center">
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
      </tr>
    </>
  );
};

export default ManageScholarship;
