import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAppliedScholarships = () => {
  // useHooks
  const {users} = useAuth();
  const axiosSecure = useAxiosSecure();

  // all cholarships
  const { data: allScholarships = [] } = useQuery({
    queryKey: ["allScholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allScholarships");
      return res.data;
    },
  });

  // my scholarships 
  const { data: myScholarships = [], refetch:refetchMyApplication } = useQuery({
    queryKey: ["myScholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myScholarships/${users.email}`);
      return res.data;
    },
  });


  return {myScholarships, allScholarships, refetchMyApplication};
};

export default useAppliedScholarships;
