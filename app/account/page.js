"use client";

import isAuth from "../components/utils/isAuth";
import Sidebar from "../components/dashboardUI/Sidebar";
import MainAccount from "../components/accountui/MainAccount";

const Account = () => {
  return (
    <div className="min-h-[100svh] flex w-full relative">
      <Sidebar />
      <MainAccount />
    </div>
  );
};

export default isAuth(Account);
