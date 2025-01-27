import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAppliedScholarships = () => {
  // useHooks
  const axiosSecure = useAxiosSecure();

  // applied scholarship
  const { data: appliedScholarships = {} } = useQuery({
    queryKey: ["appliedScholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/appliedScholarship");
      return res.data;
    },
  });
  return {appliedScholarships};
};

export default useAppliedScholarships;
