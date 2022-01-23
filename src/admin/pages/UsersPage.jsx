import React from "react";
import UsersTable from "../components/UsersPageComponents/UsersTable";

const UsersPage = () => {
  return (
    <div className="bg-white">
      <div className="shadow p-4">
        <h4>Add User</h4>
      </div>
      <UsersTable />
    </div>
  );
};

export default UsersPage;
