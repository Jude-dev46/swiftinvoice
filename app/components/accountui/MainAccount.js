import Image from "next/image";
import logout_icon from "../../../public/logout-icon.svg";
import profile_icon from "../../../public/profile-icon.png";
import profile_edit_icon from "../../../public/profile-edit-icon.png";
import edit_pen from "../../../public/edit-pen.svg";

const MainAccount = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-8 md:px-12 lg:px-24 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-1xl md:text-4xl text-black font-bold">Accounts</h1>
        <div className="">
          <button className="flex items-center justify-between gap-2 text-[#1916B9] border-[#1916B9] rounded-[20px] border-[2.5px] px-4 py-2">
            <Image src={logout_icon} alt="" width={20} /> Logout
          </button>
        </div>
      </div>

      <div className="mt-8 mx-auto text-black text-center space-y-3">
        <div className="relative">
          <Image src={profile_icon} alt="" />
          <Image
            src={profile_edit_icon}
            alt=""
            className="absolute bottom-1 left-44 "
          />
        </div>
        <p className="font-bold text-[1.5rem]">John James</p>
        <p className="text-[1.2rem]">Admin</p>
      </div>

      <div className="mt-8 bg-white   justify-start rounded-lg w-[90%] mx-auto h-auto text-black gap-4 p-4 grid grid-cols-3 grid-rows-1">
        <div className="self-center justify-self-start">
            <ul className="text-[1.2rem] space-y-3 ">
                <li className="">Name</li>
                <li className="">Business Name</li>
                <li className="">Business Field</li>
                <li className="">Email</li>
                <li className="">Date Of Birth</li>
                <li className="">Phone Number</li>


            </ul>
        </div>
        <div className="self-center justify-self-start">

        <ul className="text-[1.2rem] space-y-3">
                <li className="">John James</li>
                <li className="">Betty's Cake</li>
                <li className="">Catering</li>
                <li className="">johnjames@gmail.com</li>
                <li className="">14th July</li>
                <li className="">09012345678</li>


            </ul>
        </div>

        <div className="self-start justify-self-center w-8  ">
            <Image src={edit_pen}   alt=""/>
        </div>
      </div>
    </div>
  );
};

export default MainAccount;
