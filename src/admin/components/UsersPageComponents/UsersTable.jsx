import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUsers } from "../../../redux/actions/admin/users";
import { _delete } from "../../../redux/actions/http";
import parseError from "../../../utils/parseError";

import ConfirmDeleteModal from "../common/ConfirmDeleteModal";

const sccs = {
    stangelus: "St Angelus",
    stpeters: "St Peters",
    stjoseph: "St Joseph",
};

const UsersTable = ({ page, pageSize }) => {
    const { users } = useSelector((state) => state.usersState);

    const [confirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const openDeleteUserModal = (user) => {
        setSelectedUser(user);
        setConfirmDeleteModalOpen(true);
    };

    const handleDeleteUser = async () => {
        setLoading(true);
        try {
            const data = await _delete(`users/${selectedUser._id}`, "admin");

            toast.success(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setLoading(false);
            setSelectedUser({});
            dispatch(getUsers({ page, pageSize }));
        } catch (error) {
            toast.error(parseError(error), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setLoading(false);
            setSelectedUser({});
            setConfirmDeleteModalOpen(false)
        }
    };

    return (
        <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Image
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Firstname
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Laststname
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Role
                        </th>
                        <th
                            scope="col"
                            className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Scc Group
                        </th>
                        <th scope="col" className="relative px-5 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((person, i) => (
                        <tr key={person._id}>
                            <td className="px-3 py-4 whitespace-nowrap">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={`${
                                            person?.avatar.startsWith("https")
                                                ? "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
                                                : person?.avatar
                                                ? process.env
                                                      .REACT_APP_UPLOADS_URL +
                                                  person?.avatar
                                                : "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
                                        }`}
                                        alt=""
                                    />
                                </div>
                            </td>

                            <td className="px-5 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {person.firstname}
                                </div>
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {person.lastname}
                                </div>
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                    {person.email}
                                </div>
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                    {person.role}
                                </div>
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                    {sccs[person.scc]}
                                </div>
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap">
                                <div
                                    onClick={() => openDeleteUserModal(person)}
                                    className="flex items-center space-x-1 text-red-700 text-xs p-2 rounded-full cursor-pointer hover:opacity-60"
                                >
                                    <FaTrash />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ConfirmDeleteModal
                isOpen={confirmDeleteModalOpen}
                closeModal={() => {
                    setConfirmDeleteModalOpen(false);
                    setSelectedUser({});
                }}
                loading={loading}
                message="Are you sure you want to delete the User?"
                actionMethod={handleDeleteUser}
            />
        </div>
    );
};

export default UsersTable;
