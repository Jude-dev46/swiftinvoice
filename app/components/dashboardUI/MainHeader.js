import Image from "next/image";
import Link from "next/link";

import Notifications from "../../../public/notifications.svg";

const MainHeader = ({ welcomeText }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-4xl text-black font-semibold">{welcomeText}</h1>
      <div className="flex items-center gap-4">
        <div>
          <p className="text-black text-1xl font-bold flex flex-col">
            John James<span className="">Admin</span>
          </p>
        </div>
        <Link href="/account">
          <p className="bg-blue-900 rounded-full px-4 py-2">J</p>
        </Link>
        <Image src={Notifications} width={32} alt="" />
      </div>
    </div>
  );
};

export default MainHeader;
