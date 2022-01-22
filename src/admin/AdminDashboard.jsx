import React from "react";
import { Outlet} from "react-router-dom";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

const AdminDashboard = () => {
  return (
    <div className="min-w-full min-h-screen  h-screen overflow-hidden bg-blue-100">
      <TopBar />
      <SideBar />
      <main className="ml-56 pt-16">
        <div className="p-0 flex flex-col h-screen">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
