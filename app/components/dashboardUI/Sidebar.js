import Image from "next/image";
import Link from "next/link";

import Account from "../../../public/account.svg";
import Cards from "../../../public/cards.svg";
import Clients from "../../../public/clients.svg";
import History from "../../../public/history.svg";
import Home from "../../../public/home.svg";
import Logo from "../../../public/logo-text.svg";
import Invoices from "../../../public/invoice.svg";
import Notifications from "../../../public/notifications.svg";
import Services from "../../../public/services.svg";
import Settings from "../../../public/settings.svg";

const Sidebar = () => {
  return (
    <div className="bg-neutral-100 hidden lg:block w-2.5/12 p-8 flex flex-col items-center justify-between">
      <div className="mb-5">
        <Image src={Logo} width={227} height={120} alt="" priority={true} />
      </div>
      <div className="h-[75%]">
        <Link
          href="/"
          className="text-blue-900 text-3xl font-bold flex items-center gap-4 mb-6"
        >
          <Image src={Home} width={24} alt="" />
          <p className="text-xl">Dashboard</p>
        </Link>
        <Link
          href="/invoices"
          className="text-black text-3xl font-bold flex items-center gap-4 mb-6"
        >
          <Image src={Invoices} width={24} alt="" />
          <p className="text-xl">Invoices</p>
        </Link>

        <Link
          href="/clients"
          className="text-black text-3xl font-bold flex items-center gap-4 mb-6"
        >
          <Image src={Clients} width={24} alt="" />
          <p className="text-xl">Clients</p>
        </Link>
        <Link
          href="/history"
          className="text-black text-3xl font-bold flex items-center gap-4 mb-6"
        >
          <Image src={History} width={24} alt="" />
          <p className="text-xl">History</p>
        </Link>
        <Link
          href="/services"
          className="text-black text-3xl font-bold flex items-center gap-4 mb-6"
        >
          <Image src={Services} width={24} alt="" />
          <p className="text-xl">Services</p>
        </Link>
        <Link
          href="/cards"
          className="text-black text-3xl font-bold flex items-center gap-4 mb-6"
        >
          <Image src={Cards} width={24} alt="" />
          <p className="text-xl">Cards</p>
        </Link>
        <Link
          href="/notifications"
          className="text-black text-3xl font-bold flex items-center gap-4 mb-6"
        >
          <Image src={Notifications} width={24} alt="" />
          <p className="text-xl">Notifications</p>
        </Link>
      </div>
      <div className="w-full flex flex-col items-center border-t-2 border-neutral-200 pt-4">
        <Link
          href="/account"
          className="text-black text-3xl font-bold flex items-center gap-4 mb-6"
        >
          <Image src={Account} width={24} alt="" />
          <p className="text-xl">Account</p>
        </Link>
        <Link
          href="/settings"
          className="text-black text-3xl font-bold flex items-center gap-4 mb-6"
        >
          <Image src={Settings} width={24} alt="" />
          <p className="text-xl">Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
