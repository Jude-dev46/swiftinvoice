"use client";

import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

import part1 from "../../../public/Image.png";
import part2 from "../../../public/Image2.png";
import Home from "../../../public/home.svg";
import Cards from "../../../public/cards.svg";
import Account from "../../../public/account.svg";
import Logo from "../../../public/logo-text.svg";
import Clients from "../../../public/clients.svg";
import Invoices from "../../../public/invoice.svg";
import Settings from "../../../public/settings.svg";
import Notifications from "../../../public/notifications.svg";
// import History from "../../../public/history.svg";
// import Services from "../../../public/services.svg";

const Sidebar = () => {
  const pathname = usePathname();
  const isOpen = useSelector((state) => state.ui.isOpen);

  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  return (
    <>
      <div
        className={`bg-neutral-100 hidden lg:block w-2.5/12 p-8 flex  flex-col items-center justify-between`}
      >
        <div className="mb-8">
          <Image src={Logo} width={227} height={120} alt="" priority={true} />
        </div>
        <div className="h-[75%] flex flex-col gap-4">
          <Link
            href="/dashboard"
            className={`${
              pathname === "/dashboard"
                ? "text-blue-900 font-bold"
                : "text-black"
            }  text-3xl font-md flex items-center gap-4 mb-6`}
          >
            <Image src={Home} width={24} alt="" />
            <p className="text-xl">Dashboard</p>
          </Link>
          <Link
            href="/invoices"
            className={`${
              pathname === "/invoices"
                ? "text-blue-900 font-bold"
                : "text-black"
            } text-3xl font-md flex items-center gap-4 mb-6`}
          >
            <Image src={Invoices} width={24} alt="" />
            <p className="text-xl">Invoices</p>
          </Link>

          <Link
            href="/clients"
            className={`${
              pathname === "/clients" ? "text-blue-900 font-bold" : "text-black"
            } text-3xl font-md flex items-center gap-4 mb-6`}
          >
            <Image src={Clients} width={24} alt="" />
            <p className="text-xl">Clients</p>
          </Link>
          {/* <Link
          href="/history"
          className={`${
            pathname === "/history" ? "text-blue-900" : "text-black"
          } text-3xl font-bold flex items-center gap-4 mb-6`}
        >
          <Image src={History} width={24} alt="" />
          <p className="text-xl">History</p>
        </Link>
        <Link
          href="/services"
          className={`${
            pathname === "/services" ? "text-blue-900" : "text-black"
          } text-3xl font-bold flex items-center gap-4 mb-6`}
        >
          <Image src={Services} width={24} alt="" />
          <p className="text-xl">Services</p>
        </Link> */}
          <Link
            href="/cards"
            className={`${
              pathname === "/cards" ? "text-blue-900 font-bold" : "text-black"
            } text-3xl font-md flex items-center gap-4 mb-6`}
          >
            <Image src={Cards} width={24} alt="" className="text-blue-900" />
            <p className="text-xl">Cards</p>
          </Link>
          <Link
            href="/notifications"
            className={`${
              pathname === "/notifications"
                ? "text-blue-900 font-bold"
                : "text-black"
            } text-3xl font-md flex items-center gap-4 mb-6`}
          >
            <Image src={Notifications} width={24} alt="" />
            <p className="text-xl">Notifications</p>
          </Link>
        </div>
        <div className="w-full flex flex-col border-t-2 border-neutral-200 pt-4">
          <Link
            href="/account"
            className={`${
              pathname === "/account" ? "text-blue-900 font-bold" : "text-black"
            } text-3xl font-md flex items-center gap-4 mb-6`}
          >
            <Image src={Account} width={24} alt="" />
            <p className="text-xl">Account</p>
          </Link>
          <Link
            href="/settings"
            className={`${
              pathname === "/settings"
                ? "text-blue-900 font-bold"
                : "text-black"
            } text-3xl font-md flex items-center gap-4 mb-6`}
          >
            <Image src={Settings} width={24} alt="" />
            <p className="text-xl">Settings</p>
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`absolute bg-neutral-100 ${
          !isOpen ? "hidden" : "block"
        } min-h-[100svh] lg:hidden w-2.5/12 p-8 flex flex-col items-start justify-between z-10`}
      >
        <div className="mb-5">
          <Image src={part1} width={24} height={24} className="" alt="" />
          <Image
            src={part2}
            width={24}
            height={24}
            alt=""
            className="-mt-[10px]"
          />
        </div>
        <div className="h-[85%] flex flex-col gap-4 -mt-20">
          <Link
            href="/dashboard"
            className={`${
              pathname === "/dashboard" ? "text-blue-900" : "text-black"
            }  text-3xl font-bold flex items-center gap-4 mb-6`}
          >
            <Image src={Home} width={32} alt="" />
            {/* <p className="text-xl">Dashboard</p> */}
          </Link>
          <Link
            href="/invoices"
            className={`${
              pathname === "/invoices" ? "text-blue-900" : "text-black"
            } text-3xl font-bold flex items-center gap-4 mb-6`}
          >
            <Image src={Invoices} width={32} alt="" />
            {/* <p className="text-xl">Invoices</p> */}
          </Link>

          <Link
            href="/clients"
            className={`${
              pathname === "/clients" ? "text-blue-900" : "text-black"
            } text-3xl font-bold flex items-center gap-4 mb-6`}
          >
            <Image src={Clients} width={32} alt="" />
            {/* <p className="text-xl">Clients</p> */}
          </Link>
          {/* <Link
          href="/history"
          className={`${
            pathname === "/history" ? "text-blue-900" : "text-black"
          } text-3xl font-bold flex items-center gap-4 mb-6`}
        >
          <Image src={History} width={24} alt="" />
          <p className="text-xl">History</p>
        </Link>
        <Link
          href="/services"
          className={`${
            pathname === "/services" ? "text-blue-900" : "text-black"
          } text-3xl font-bold flex items-center gap-4 mb-6`}
        >
          <Image src={Services} width={24} alt="" />
          <p className="text-xl">Services</p>
        </Link> */}
          <Link
            href="/cards"
            className={`${
              pathname === "/cards" ? "text-blue-900" : "text-black"
            } text-3xl font-bold flex items-center gap-4 mb-6`}
          >
            <Image src={Cards} width={32} alt="" />
            {/* <p className="text-xl">Cards</p> */}
          </Link>
          <Link
            href="/notifications"
            className={`${
              pathname === "/notifications" ? "text-blue-900" : "text-black"
            } text-3xl font-bold flex items-center gap-4 mb-6`}
          >
            <Image src={Notifications} width={32} alt="" />
            {/* <p className="text-xl">Notifications</p> */}
          </Link>
        </div>
        <div className="w-full flex flex-col items-start border-t-2 border-neutral-200 pt-4">
          <Link
            href="/account"
            className={`${
              pathname === "/account" ? "text-blue-900" : "text-black"
            } text-3xl font-bold flex items-center gap-4 mb-6`}
          >
            <Image src={Account} width={32} alt="" />
          </Link>
          <Link
            href="/settings"
            className={`${
              pathname === "/settings" ? "text-blue-900" : "text-black"
            } text-3xl font-sm flex items-center gap-4 mb-6`}
          >
            <Image src={Settings} width={32} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
