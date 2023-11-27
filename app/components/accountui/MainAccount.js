import { useEffect, useState } from "react";
import Image from "next/image";
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

  useEffect(() => {
    (async () => {
      const storedData = localStorage.getItem("data");
      const parsedData = JSON.parse(storedData);

      setEmail(parsedData.email);
      setBusinessName(parsedData.businessName);
      setBusinessField(parsedData.businessField);
      setDate(parsedData.date);
    })();
  }, []);

  function formatDate(dateArg) {
    if (date) {
      return format(parseISO(dateArg), "dd-mm");
    } else {
      return dateArg;
    }
  }

  console.log(date);
  function logoutHandler() {
    localStorage.removeItem("data");
    router.push("/auth");
  }

  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-8 md:px-12 lg:px-24 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-1xl md:text-4xl text-black font-bold">Accounts</h1>
        <div className="">
          <button
            className="flex items-center justify-between gap-2 text-[#1916B9] border-[#1916B9] rounded-[20px] border-[2.5px] px-4 py-2"
            onClick={logoutHandler}
          >
            <Image src={logout_icon} alt="" width={20} /> Logout
          </button>
        </div>
      </div>

      <div className="mt-8 mx-auto flex flex-col text-black text-center space-y-3">
        <div className="relative flex flex-col self-center">
          <Image src={profile_icon} width={96} alt="" />
          <Image
            src={profile_edit_icon}
            alt=""
            width={32}
            className="absolute bottom-1 right-0"
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
