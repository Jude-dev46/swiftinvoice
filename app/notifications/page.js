"use client";
import Sidebar from "../components/dashboardUI/Sidebar";
import MainNotifications from "../components/notificationsui/MainNotifications";

const pages = () => {
  return (
    <div className="h-[100svh] flex w-full relative">
        <Sidebar />
        <MainNotifications />
    </div>
  )
}

export default pages