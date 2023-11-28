"use client";

import { useEffect, useState } from "react";

import isAuth from "../components/utils/isAuth";
import MainHeader from "../components/dashboardUI/MainHeader";
import Sidebar from "../components/dashboardUI/Sidebar";
import MainSettings from "../components/settingsui/MainSettings";

const SettingsPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("data");
      const parsedData = JSON.parse(userData);

      setEmail(parsedData.email);
    }
  }, []);

  return (
    <div className="h-[100svh] flex w-full relative">
      <Sidebar />
      <MainSettings welcomeText={"Settings"} email={email} />
    </div>
  );
};

export default isAuth(SettingsPage);
