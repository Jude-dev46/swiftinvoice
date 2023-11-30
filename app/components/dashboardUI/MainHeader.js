"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { uiActions } from "../store/uislice";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../public/menu.svg";
import Notifications from "../../../public/notifications.svg";

const MainHeader = ({ welcomeText, email }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isOpen);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const storedImageData = localStorage.getItem("uploadedImage");
    const imageData = JSON.parse(storedImageData);

    setSelectedImage(imageData);
  }, []);

  function toggleSidebar() {
    if (isOpen) {
      dispatch(uiActions.setIsOpen(false));
    } else {
      dispatch(uiActions.setIsOpen(true));
    }
  }

  console.log(email);

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl md:text-4xl text-black font-bold">
        {welcomeText}
      </h1>
      <div className="flex items-center gap-2 lg:mr-10">
        <div className="hidden md:block">
          <p className="text-black text-sm md:text-1xl font-semibold flex flex-col">
            {email}
            <span className="text-right">Admin</span>
          </p>
        </div>
        <Link href="/account">
          {selectedImage ? (
            <div className="w-12 h-12 lg:w-12 lg:h-12 rounded-full">
              <Image
                src={selectedImage}
                alt="Selected"
                width={24}
                height={24}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          ) : (
            <p className="bg-blue-900 rounded-full px-4 py-2 text-center">
              {email?.charAt(0).upperCase()}
            </p>
          )}
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
