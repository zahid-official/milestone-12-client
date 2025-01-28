/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Auth/Hook/useAxiosSecure";
import useAppliedScholarships from "../../../Auth/Hook/useAppliedScholarships";

const ReviewCard = ({ card, idx }) => {
    // useHooks
    const axiosSecure = useAxiosSecure();
    const {refetchAllReviews} = useAppliedScholarships();

  const {
    _id: id,
    university,
    applicantPhoto,
    subjectCategory,
    rating,

    name,
    reviewDate,
    comment,
  } = card;

  // handleDelete
  const handleDelete = () => {
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
        axiosSecure.delete(`/deleteReview/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetchAllReviews();
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
  return (
    <>
      <div className="justify-self-center hover:scale-105 duration-500 bg-[#00353b] w-full bg-[url(/assets/topScholarship.svg)] bg-cover sm:px-10 px-7 sm:py-14 py-10 rounded-xl flex flex-col justify-between items-start space-y-8 max-w-[26rem] custom-card">
        <div className="flex items-center justify-between w-full">
          {/* img */}
          <div className="h-16 w-16">
            <img
              src={applicantPhoto}
              alt="flag"
              className="w-full h-full object-contain rounded-[50%]"
            />
          </div>

          {/* ratiing */}
          <div className="flex items-center gap-1 ">
            <FaStar size={25} color="#ffc808"></FaStar>
            <span className="font-semibold title-font text-lg text-white">
              {rating}
            </span>
          </div>
        </div>

        {/* content */}
        <div className="pb-2">
          <div className="flex items-center gap-1">
            <div className="h-[1px] w-10 bg-[#83cd20]"></div>
            <p className="font-semibold text-white">0{idx + 1}</p>
          </div>

          <h2 className="text-3xl mb-4 font-bold text-white">{university}</h2>
          <div className="space-y-1.5">
            <p className="text-white">
              <span className="font-semibold">Reviewer: </span>
              {name}
            </p>
            <p className="text-white">
              <span className="font-semibold">Subject: </span>
              {subjectCategory}
            </p>
            <p className="text-white">
              <span className="font-semibold">Review Date: </span>
              {reviewDate}
            </p>
            <p className="text-white">
              <span className="font-semibold">Comments: </span>
              {comment}
            </p>
          </div>
        </div>

        {/* button */}

        <button
          onClick={handleDelete}
          className="btn w-full h-14 font-bold border-none text-white bg-red-500 hover:bg-red-700 hover:text-white transition-all duration-500 rounded-full"
        >
          Delete Review
        </button>
      </div>
    </>
  );
};

export default ReviewCard;
