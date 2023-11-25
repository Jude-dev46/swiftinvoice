"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import part1 from "../public/Image2.png";
import part2 from "../public/Image.png";
import text from "../public/text.png";
import Logo from "../public/logo-text.svg";

function welcomePage() {
  return (
    <div className="">
      <div className="h-[100vh] bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 flex flex-col justify-center items-center pt-10">
        <div>
          <Image src={part1} width={80} height={80} className="" alt="" />
          <Image
            src={part2}
            width={80}
            height={80}
            className="-mt-[30px]"
            alt=""
          />
        </div>
        <div>
          <div className="text-3xl lg:text-5xl font-medium pl-[14px] lg:pl-[24px] lg:my-2 mt-3">
            <span className="font-bold text-black">
              Welcome
              <br />
              to{" "}
            </span>
            <span className="text-orange-600">Swift</span>
            <span className="text-yellow-500">Invoice</span>
          </div>
          <p className="text-neutral-400 text-base lg:text-2xl font-normal pl-[14px] lg:pl-[24px]">
            Invoice Keeping. Made Easy.
          </p>
          <Link href="/auth">
            <button className="font-bold text-black bg-yellow-500 px-10 lg:px-24 py-1 text-lg lg:text-xl lg:py-2 rounded-md mt-6 mb-2">
              Open free account
            </button>
          </Link>
          <span className="flex flex-row space-x-1 justify-center items-center">
            <p className="text-black text-sm lg:text-lg">Have an account?</p>
            <Link href="/auth/login">
              <p className="text-blue-700 text-sm lg:text-lg hover:cursor-pointer">
                Log in here
              </p>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default welcomePage;
