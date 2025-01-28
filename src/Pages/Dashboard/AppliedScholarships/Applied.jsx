/* eslint-disable react/prop-types */

import { FaEye, FaWindowClose } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import useAxiosSecure from "../../../Auth/Hook/useAxiosSecure";

import { useState } from "react";
import { toast } from "react-toastify";

const Applied = ({ scholarship, idx }) => {
  // useHooks
  const { refetchAppliedScholarships } = useAppliedScholarships();
  const axiosSecure = useAxiosSecure();

  // state for error
  const [error, setError] = useState(false);

  // handleDelete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Canceled it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete Scholarship
        axiosSecure.patch(`/deleteAppliedScholarship/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetchAppliedScholarships();
            console.log(res.data);
            Swal.fire({
              title: "Deleted!",
              text: "Scholarship has been Canceled.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // handleStatus
  const handleStatus = (id, status) => {
    axiosSecure
      .patch(`/appliedScholarship/status/${id}`, { status })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetchAppliedScholarships();
          toast.success("Status Updated Successfully");
        }
      });
  };

  // handleFeedback
  const handleFeedback = async (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    if (!feedback) {
      return setError(true);
    }

    setError(false);
    const res = await axiosSecure.patch(
      `/feedback/${scholarship._id}`,
      feedback
    );
    if (res.data.modifiedCount > 0) {
      toast.success("Feedback Given Successfully");
      document.getElementById(`feedback${scholarship._id}`).close();
    } else {
      toast.warn("No Updated Data Found!");
      document.getElementById(`feedback${scholarship._id}`).close();
    }
  };

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

        {/* status */}
        <td>
          <select
            defaultValue={scholarship.status}
            onChange={(e) => handleStatus(scholarship._id, e.target.value)}
            className="select select-bordered"
          >
            <option value={scholarship.status} disabled>
              {scholarship.status}
            </option>
            <option value="Processing">Processing</option>
            <option value="Completed">Completed</option>
          </select>
        </td>

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

          {/* feedback */}
          <button
            onClick={() =>
              document.getElementById(`feedback${scholarship._id}`).showModal()
            }
            className="btn bg-cyan-700 hover:bg-cyan-900 text-white"
          >
            <RiFeedbackFill size={24}></RiFeedbackFill>
          </button>

          {/* delete */}
          <button
            onClick={() => handleDelete(scholarship._id)}
            disabled={scholarship.status === "Rejected"}
            className="btn bg-red-500 hover:bg-red-700 text-white"
          >
            <FaWindowClose size={24}></FaWindowClose>
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

        {/* feedback modal*/}
        <dialog
          id={`feedback${scholarship._id}`}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <form onSubmit={handleFeedback} className="flex flex-col pb-10">
              <div className="flex items-center justify-center xl:flex-row flex-col gap-10">
                <div className="w-full sm:px-10 px-5 sm:pt-14 pb-3 rounded-3xl space-y-7">
                  {/* row-01 */}
                  <h2 className="text-3xl font-bold "> Application Feedback</h2>

                  <div>
                    <textarea
                      rows={3}
                      name="feedback"
                      placeholder="Feedback"
                      className="textarea textarea-bordered textarea-lg w-full"
                    ></textarea>
                    {error && (
                      <p className="text-red-500 font-semibold mt-1">
                        Type at least single word.
                      </p>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn mt-4 bg-[#193b42] h-16 hover:bg-[#102930] text-white px-14 text-lg font-semibold"
                    >
                      Give a Feedback
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </tr>
    </>
  );
};

export default Applied;
