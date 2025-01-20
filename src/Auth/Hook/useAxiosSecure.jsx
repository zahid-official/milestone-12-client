import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  // useContext
  const { logout } = useAuth();
  // useNavigate
  const navigate = useNavigate();

  // interceptor for request
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers.authorization = `${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // interceptor for response
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // custom restrictions
      if (error.status === 401 || error.status === 403) {
        logout()
          .then(() => {
            navigate("/login");
          })
          .catch((err) => console.log(err.message));
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
