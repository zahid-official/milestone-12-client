import useAxiosSecure from "../../../Auth/Hook/useAxiosSecure";
import PageTitle from "../../../Shared/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../../../Auth/Hook/useAuth";

const ManageUsers = () => {
  // useHook
  const { users: loggedUser } = useAuth();
  const axiosSecure = useAxiosSecure();

  // tanstack query
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

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
        // delete user
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // handleRole
  const handleRole = (id, role) => {
    Swal.fire({
      title: `Sure to make ${role}!`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update Role",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/role/${id}`, { role }).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Updated!",
              text: "Role has been Updated.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="py-20">
          <PageTitle
            heading1={"Manage"}
            heading2={"Users"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>

      {/* users */}
      <h2 className="p-6 text-3xl font-semibold">
        Total Users: {users.length}
      </h2>

      <div className="overflow-x-auto max-w-screen-xl mx-auto mt-8 px-6">
        <table className="table border">
          {/* head */}
          <thead>
            <tr className="bg-gray-200 text-base">
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr className="hover" key={user._id}>
                <th>{idx + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <select
                    style={{
                      pointerEvents:
                        loggedUser.email === user?.email ? "none" : "auto",
                    }}
                    defaultValue={user?.role ? user.role : ""}
                    onChange={(e) => handleRole(user._id, e.target.value)}
                    className="select select-bordered"
                  >
                    <option value="" disabled>
                      User
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Moderator">Moderator</option>
                  </select>
                </td>
                <td className="flex items-center">
                  <button
                    style={{
                      pointerEvents:
                        loggedUser.email === user?.email ? "none" : "auto",
                    }}
                    onClick={() => handleDelete(user._id)}
                    className="btn p-2.5 btn-ghost text-red-500"
                  >
                    <FaTrashCan size={25}></FaTrashCan>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
