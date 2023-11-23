"use client";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo-text.svg";

const Navbar = () => {
  return (
    <div>
      <div className="px-4 sm:px-8 py-4 flex justify-start bg-neutral-100 bg-opacity-50 backdrop-blur-[10px]">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className=" w-[8.5rem] sm:w-auto h-10 sm:h-19"
            priority={true}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
