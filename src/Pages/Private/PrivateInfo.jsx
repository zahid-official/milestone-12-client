import { useEffect } from "react";
import useAxios from "../../Auth/Hook/useAxios";
import useAuth from "../../Auth/Hook/useAuth";


const PrivateInfo = () => {
    // useAxios Hook
    const axiosInstance = useAxios();
    // useContenxt 
    const {users} = useAuth();
    const email = users?.email;

    useEffect(() => {
        axiosInstance.get(`/privateInfo/${email}`)
        .then(res => console.log(res.data))
    },[axiosInstance, email])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-16">Demo Private Route Info for JWT</h1>
        </div>
    );
};

export default PrivateInfo;