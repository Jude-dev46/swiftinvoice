"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo-text.svg";
const Navbar = () => {
  return (
    <div>
       <Link href="/">
        <div className="bg-neutral-100 bg-opacity-50 backdrop-blur-[10px] flex flex-row items-center fixed w-full px-5 py-3 lg:py-4 lg:px-8">
          <Image
            src={logo}
            alt=""
            className=" w-[14rem] lg:w-[20rem] lg:h-14 sm:w-auto h-10 sm:h-19"
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
