import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

const AdminDashboard = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <div className="min-w-full min-h-screen  h-screen overflow-hidden bg-blue-100">
      <TopBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <SideBar open={sideBarOpen} />
      <main className={`${sideBarOpen && "ml-64"} transition-all duration-200 ease-linear pt-16`}>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
