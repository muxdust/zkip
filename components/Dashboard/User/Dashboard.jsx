"use client";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { userContext } from "../../userContext";
import DashboardComp from "./DashboardComp";
import LinksComp from "./Links";
import Settings from "./Settings";
import Analytics from "./Analytics";
import axios from "axios";
import Bubble from "@/components/ui/Bubble";

const Dashboard = () => {
  const { activeComponent, setUser, user } = useContext(userContext);

  const [bubbleMessage, setBubbleMessage] = useState(null);
  const [bubbleType, setBubbleType] = useState(null);

  const logout = async () => {
    try {
      const response = await axios.get("/api/user/logout");
      if (response.status === 200) {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get("/api/user/me");
      if (response.status === 200) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const recentLinks = user?.links.slice(0, 5);

  const deleteLink = async (id) => {
    try {
      const response = await axios.delete(`/api/link/delete/${id}`);
      if (response.status === 200) {
        setBubbleMessage(response.data.message);
        setBubbleType("success");
        setTimeout(() => {
          setBubbleMessage(null);
          getUser();
        }, 2000);
      }
    } catch (error) {
      setBubbleMessage(error.response?.data?.message || "Something went wrong");
      setBubbleType("error");
      setTimeout(() => setBubbleMessage(null), 2000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row font-[family-name:var(--font-roboto)]">
      <Sidebar />
      <main className="flex-1 p-4">
        {activeComponent === "dashboard" && (
          <DashboardComp
            name={user?.name}
            totalLinks={user?.totalLinks}
            totalClicks={user?.totalClicks}
            totalUsers={user?.totalUsers}
            recentLinks={recentLinks}
            deleteLink={deleteLink}
          />
        )}
        {activeComponent === "links" && <LinksComp />}
        {activeComponent === "analytics" && <Analytics />}
        {activeComponent === "settings" && <Settings />}

        {bubbleMessage && <Bubble type={bubbleType} message={bubbleMessage} />}
      </main>
    </div>
  );
};

export default Dashboard;
