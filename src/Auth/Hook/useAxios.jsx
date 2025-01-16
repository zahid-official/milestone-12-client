import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxios = () => {
  // useContext
  const { logout } = useAuth();
  // useNavigate
  const navigate = useNavigate();

  // Axios Interceptors
  useEffect(() => {
    instance.interceptors.response.use(
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
  }, [logout, navigate]);

  return instance;
};

export default useAxios;
