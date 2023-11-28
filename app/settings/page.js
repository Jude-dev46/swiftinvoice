"use client";

import isAuth from "../components/utils/isAuth";
import Sidebar from "../components/dashboardUI/Sidebar";
import MainSettings from "../components/settingsui/MainSettings";

const SettingsPage = () => {
  return (
    <div className="min-h-[100svh] flex w-full relative">
      <Sidebar />
      <MainSettings />
    </div>
  );
};

export default isAuth(SettingsPage);
