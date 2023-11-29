"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { uiActions } from "../store/uislice";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../public/menu.svg";
import { useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";

import logout_icon from "../../../public/logout-icon.svg";
import profile_icon from "../../../public/profile-icon.png";
import profile_edit_icon from "../../../public/profile-edit-icon.png";
import edit_pen from "../../../public/edit-pen.svg";

const MainAccount = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessField, setBusinessField] = useState("");
  const [date, setDate] = useState("");
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(() => {
    if (typeof window !== "undefined") {
      const storedImageData = localStorage.getItem("uploadedImage");
      return storedImageData ? JSON.parse(storedImageData) : null;
    }
  });

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isOpen);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (selectedImage) {
        localStorage.setItem("uploadedImage", JSON.stringify(selectedImage));
      }
    }
  }, [selectedImage]);

  function toggleSidebar() {
    if (isOpen) {
      dispatch(uiActions.setIsOpen(false));
    } else {
      dispatch(uiActions.setIsOpen(true));
    }
  }

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem("data");
        const parsedData = JSON.parse(storedData);

        setEmail(parsedData.email);
        setBusinessName(parsedData.businessName);
        setBusinessField(parsedData.businessField);
        setDate(parsedData.date);
      }
    })();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    console.log(file);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  function formatDate(dateArg) {
    if (date) {
      return format(parseISO(dateArg), "dd-mm");
    } else {
      return dateArg;
    }
  }

  function logoutHandler() {
    dispatch(uiActions.setIsLoading(true));
    localStorage.removeItem("data");
    localStorage.removeItem("uploadedImage");
    dispatch(uiActions.setIsLoading(false));
    router.push("/");
  }
  console.log(selectedImage);

  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-8 md:px-12 lg:px-24 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-4xl text-black font-bold">Accounts</h1>
        <div className="flex gap-4">
          <button
            className="flex items-center justify-between gap-2 text-[#1916B9] border-[#1916B9] rounded-[20px] border-[2.5px] px-4 py-2"
            onClick={logoutHandler}
          >
            <Image src={logout_icon} alt="" width={20} /> Logout
          </button>
          <Image
            src={Menu}
            width={32}
            alt=""
            onClick={toggleSidebar}
            className="lg:hidden block"
          />
        </div>
      </div>

      <div className="mt-8 mx-auto flex flex-col text-black text-center space-y-3">
        <div className="relative flex flex-col self-center">
          {selectedImage ? (
            <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full">
              <Image
                src={selectedImage}
                alt="Selected"
                width={100}
                height={100}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full">
              <Image
                src={profile_icon}
                alt=""
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          )}
          <button onClick={handleButtonClick}>
            <Image
              src={profile_edit_icon}
              alt=""
              className="absolute bottom-7 left-24 lg:bottom-5 lg:left-32 w-10 h-10 lg:w-16 lg:h-16 "
            />
          </button>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>
        <p className="font-bold text-[1.5rem]">{email}</p>
        <p className="text-[1.2rem]">Admin</p>
      </div>

      <div className="mt-8 bg-white flex justify-start items-start rounded-lg w-[100%] p-4 lg:w-fit mx-auto h-auto text-black gap-8 lg:py-4 lg:px-12 relative">
        <div className="w-[2/5] self-start justify-self-start">
          <ul className="text-[1.2rem] flex flex-col gap-4 justify-between font-bold">
            <li className="">Business Name:</li>
            <li className="">Business Field:</li>
            <li className="">Email:</li>
            <li className="">Date Of Birth:</li>
            <li className="">Phone Number:</li>
          </ul>
        </div>
        <div className="w-[3/5] h-full self-start justify-self-start">
          <ul className="text-[1.2rem] h-full flex flex-col gap-4 justify-between">
            <li className="">{businessName}</li>
            <li className="">{businessField}</li>
            <li className="">{email}</li>
            <li className="">{formatDate(date)}</li>
            <li className="">09012345678</li>
          </ul>
        </div>
        <div className="absolute top-2 right-2">
          <Image src={edit_pen} width={24} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainAccount;
