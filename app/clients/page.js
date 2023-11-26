"use client";
import Sidebar from "../components/dashboardUI/Sidebar";
import MainClient from "../components/clientui/MainClient";

const Clients = () => {
  return (
    <div className="h-full lg:h-[100svh] flex w-full relative">
      <Sidebar />
      <MainClient />
    </div>
  );
};

export default Clients;
