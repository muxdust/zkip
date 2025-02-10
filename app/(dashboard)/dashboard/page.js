import Dashboard from "@/components/Dashboard/User/Dashboard";
import React from "react";
import { DashboardProvider } from "@/components/Dashboard/User/DashboardContext";

const UserDashboard = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};

export default UserDashboard;
