import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRole = () => {
  // usehooks
  const { users } = useAuth();
  const axiosSecure = useAxiosSecure();

  const email = users?.email;
  // get role
  const { data: role = {} } = useQuery({
    queryKey: ["role"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${email}`);
      return res.data;
    },
  });
  return {role};
};

export default useRole;
