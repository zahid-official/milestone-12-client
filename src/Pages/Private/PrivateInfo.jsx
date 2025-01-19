import { useEffect } from "react";
import useAxiosSecure from "../../Auth/Hook/useAxiosSecure";
import useAuth from "../../Auth/Hook/useAuth";


const PrivateInfo = () => {
    // useAxiosSecure Hook
    const axiosSecure = useAxiosSecure();
    // useContenxt 
    const {users} = useAuth();
    const email = users?.email;

    useEffect(() => {
        axiosSecure.get(`/privateInfo/${email}`)
        .then(res => console.log(res.data))
    },[axiosSecure, email])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-16">Demo Private Route Info for JWT</h1>
        </div>
    );
};

export default PrivateInfo;