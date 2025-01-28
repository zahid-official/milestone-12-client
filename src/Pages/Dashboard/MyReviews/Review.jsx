/* eslint-disable react/prop-types */

import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import useAxiosSecure from "../../../Auth/Hook/useAxiosSecure";
import { toast } from "react-toastify";
import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";
import Swal from "sweetalert2";

const Review = ({ review, idx }) => {
  // useHooks
  const axiosSecure = useAxiosSecure();
  const { refetchMyReview } = useAppliedScholarships();
  // state for rating
  const [rating, setRating] = useState(review.rating);

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
        // delete Review
        axiosSecure.delete(`/deleteMyReview/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetchMyReview();
            Swal.fire({
              title: "Deleted!",
              text: "Review has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // handleEdit
  const handleReview = async (event) => {
    event.preventDefault();

    const reviewDate = event.target.reviewDate.value;
    const comment = event.target.comment.value;

    const reviewData = {
      rating,
      comment,
      reviewDate,
    };

    // fetching data
    const res = await axiosSecure.patch(
      `/editReview/${review._id}`,
      reviewData
    );
    if (res.data.modifiedCount > 0) {
      refetchMyReview();
      toast.success("Review Updated Successfully");
      document.getElementById(`editReview${review._id}`).close();
    } else {
      toast.warn("No Updating Data Found!");
      document.getElementById(`editReview${review._id}`).close();
    }
  };

  return (
    <>
      <tr key={review._id}>
        <th>{idx + 1}</th>

        {/* university */}
        <td>
          <div className="font-bold">{review.university}</div>
        </td>

        {/* scholarshipName */}
        <td>{review.scholarshipName}</td>

        {/* reviewDate */}
        <td>{review.reviewDate}</td>

        {/* comment */}
        <td>{review.comment}</td>

        {/* actions */}
        <td className="text-center space-x-2">
          {/* edit */}
          <button
            onClick={() => document.getElementById(`editReview${review._id}`).showModal()}
            className="btn bg-slate-500 hover:bg-slate-700 text-white"
          >
            <FaPencilAlt size={24}></FaPencilAlt>
          </button>

          {/* delete */}
          <button
            onClick={() => handleDelete(review._id)}
            className="btn bg-red-500 hover:bg-red-700 text-white"
          >
            <FaTrash size={24}></FaTrash>
          </button>
        </td>
      </tr>
      {/* review modal */}
      <dialog id={`editReview${review._id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleReview} className="flex flex-col pb-10">
            {/* top */}
            <div className="flex items-center justify-center xl:flex-row flex-col gap-10">
              <div className="w-full sm:px-8 px-5 sm:py-14 rounded-3xl space-y-8">
                <h2 className="text-3xl font-bold">Update Review</h2>

                {/* rating */}
                <div className="space-y-2">
                  <p>
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={rating}
                      onChange={setRating}
                    />
                  </p>
                </div>

                {/* review date */}
                <label className="input w-full text-base font-semibold input-bordered flex items-center gap-2">
                  Review Date:
                  <input
                    type="date"
                    name="reviewDate"
                    defaultValue={review.reviewDate}
                    className="grow"
                    required
                  />
                </label>

                {/* comment */}
                <div>
                  <textarea
                    rows={"3"}
                    placeholder="Comment"
                    defaultValue={review.comment}
                    name="comment"
                    className="textarea textarea-bordered textarea-lg w-full "
                  ></textarea>
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className="text-center">
              <button
                type="submit"
                className="btn bg-[#193b42] h-16 hover:bg-[#102930] text-white px-14 text-lg font-semibold"
              >
                Update Review
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Review;
