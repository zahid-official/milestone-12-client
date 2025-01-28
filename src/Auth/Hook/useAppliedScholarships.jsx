import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAppliedScholarships = () => {
  // useHooks
  const { users } = useAuth();
  const axiosSecure = useAxiosSecure();

  // all cholarships
  const { data: allScholarships = [], refetch: refetchAllScholarships } =
    useQuery({
      queryKey: ["allScholarships"],
      queryFn: async () => {
        const res = await axiosSecure.get("/allScholarships");
        return res.data;
      },
    });

  // my scholarships
  const { data: myScholarships = [], refetch: refetchMyApplication } = useQuery(
    {
      queryKey: ["myScholarships"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/myScholarships/${users.email}`);
        return res.data;
      },
    }
  );

  // all reviews
  const { data: allReviews = [], refetch: refetchAllReviews } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allReviews");
      return res.data;
    },
  });

  // my review
  const { data: myReviews = [], refetch: refetchMyReview } = useQuery({
    queryKey: ["myReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myReviews/${users.email}`);
      return res.data;
    },
  });

  return {
    allScholarships,
    refetchAllScholarships,
    myScholarships,
    refetchMyApplication,

    allReviews,
    refetchAllReviews,
    myReviews,
    refetchMyReview,
  };
};

export default useAppliedScholarships;
