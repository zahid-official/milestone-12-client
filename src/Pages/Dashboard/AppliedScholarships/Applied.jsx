/* eslint-disable react/prop-types */

import { FaEye, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import useAxiosSecure from "../../../Auth/Hook/useAxiosSecure";

const Applied = ({ scholarship, idx }) => {
  // useHooks
  const { refetchAllScholarships } = useAppliedScholarships();
  const axiosSecure = useAxiosSecure();

  // handleDelete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete Scholarship
        axiosSecure.delete(`/deleteScholarship/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetchAllScholarships();
            Swal.fire({
              title: "Deleted!",
              text: "Scholarship has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // handleDetails

  return (
    <>
      <tr>
        <th>{idx + 1}</th>

        {/* university */}
        <td>
          <div className="font-bold">{scholarship.university}</div>
        </td>

        {/* scholarshipName */}
        <td>{scholarship.scholarshipName}</td>

        {/* subjectCategory */}
        <td>{scholarship.subject}</td>

        {/* degree */}
        <td>{scholarship.applyingDegree}</td>

        {/* applicationFees */}
        <td>${scholarship.applicationFees}</td>

        {/* actions */}
        <td className="text-center space-x-2">
          {/* details */}
          <button
            onClick={() =>
              document
                .getElementById(`viewDetails${scholarship._id}`)
                .showModal()
            }
            className="btn bg-emerald-500 hover:bg-emerald-700 text-white"
          >
            <FaEye size={24}></FaEye>
          </button>

          {/* delete */}
          <button
            onClick={() => handleDelete(scholarship._id)}
            className="btn bg-red-500 hover:bg-red-700 text-white"
          >
            <FaTrash size={24}></FaTrash>
          </button>
        </td>

        {/* viewDetails modal*/}
        <dialog
          id={`viewDetails${scholarship._id}`}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <div className="flex items-center justify-center xl:flex-row flex-col gap-10">
              <div className="w-full sm:px-10 px-5 sm:pt-14 pb-6 rounded-3xl space-y-7">
                {/* row-01 */}
                <h2 className="text-3xl font-bold "> Application Details</h2>

                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                  University:
                  <input
                    type="text"
                    defaultValue={scholarship.university}
                    className="grow"
                  />
                </label>

                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                  Degree:
                  <input
                    type="text"
                    defaultValue={scholarship.applyingDegree}
                    className="grow"
                  />
                </label>

                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                Scholarship:
                  <input
                    type="text"
                    defaultValue={scholarship.scholarship}
                    className="grow"
                  />
                </label>

                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                Applicant:
                  <input
                    type="text"
                    defaultValue={scholarship.name}
                    className="grow"
                  />
                </label>

                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                Email:
                  <input
                    type="text"
                    defaultValue={scholarship.email}
                    className="grow"
                  />
                </label>

                
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog" className="text-center w-full pb-10">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-[#193b42] h-14 hover:bg-[#102930] text-white px-14 text-lg font-semibold">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </tr>
    </>
  );
};

export default Applied;
