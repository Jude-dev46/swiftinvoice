"use client";

import Image from "next/image";
import Link from "next/link";

import { uiActions } from "../store/uislice";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../public/menu.svg";
import Notifications from "../../../public/notifications.svg";

const MainHeader = ({ welcomeText }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isOpen);

  function toggleSidebar() {
    if (isOpen) {
      dispatch(uiActions.setIsOpen(false));
    } else {
      dispatch(uiActions.setIsOpen(true));
    }
  }

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-1xl md:text-4xl text-black font-bold">
        {welcomeText}
      </h1>
      <div className="flex items-center gap-2 lg:mr-10">
        <div className="hidden md:block">
          <p className="text-black text-sm md:text-1xl font-semibold flex flex-col">
            John James<span className="text-right">Admin</span>
          </p>
        </div>
        <Link href="/account">
          <p className="bg-blue-900 rounded-full px-4 py-2">J</p>
        </Link>
        <Image
          src={Menu}
          width={32}
          alt=""
          onClick={toggleSidebar}
          className="lg:hidden block"
        />
      </div>
    </div>
  );
};

export default MainHeader;
