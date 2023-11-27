import MainHeader from "../dashboardUI/MainHeader";
import line from "../../../public/line.png";
import delete_bin from "../../../public/delete-bin.png";
import Image from "next/image";

const MainNotifications = ({ email }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-8 md:px-12 lg:px-24 py-8">
      <MainHeader welcomeText={"Notifications"} email={email} />

      <div className="grid grid-cols-3 grid-rows-1 gap-4 items-center">
        <Image src={line} alt="" />
        <p className="text-xl md:text-2xl text-black font-bold text-center">
          3 unread notifications
        </p>
        <Image src={line} alt="" />
      </div>

      <div className="mt-4 py-2 w-full bg-white text-end px-4 border-lg">
        <Image src={delete_bin} alt="" className="inline" width={24} />
      </div>

      <div className="mt-8 text-black text-[1.2rem] w-full">
        <p>
          Invoice (ID: 20231208-001) of client judeoscar@gmail.com is overdue
        </p>
      </div>
    </div>
  );
};

export default MainNotifications;
