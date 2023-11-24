"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../components/store/uislice";

import Navbar from "../../components/ui/Navbar";
import RedCancel from "../../../public/red-cancel.svg";
import Modal from "../../components/ui/Modal";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const isLoading = useSelector((state) => state.ui.isLoading);
  // const isOpen = useSelector((state) => state.ui.isOpen);
  // const isModalOpen = useSelector((state) => state.ui.isModalOpen);

  async function loginHandler(e) {
    try {
      e.preventDefault();
      dispatch(uiActions.setIsLoading(true));

      const enteredData = {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      };

      const emailIsValid =
        enteredData.email.includes("@") && enteredData.email.trim().length > 0;
      const passwordIsValid = enteredData.password.trim().length >= 6;

      if (!emailIsValid) {
        setIsEmailError(true);
        dispatch(uiActions.setIsLoading(false));
      } else {
        setIsEmailError(false);
      }

      if (!passwordIsValid) {
        setIsPasswordError(true);
        dispatch(uiActions.setIsLoading(false));
      } else {
        setIsPasswordError(false);
      }

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enteredData),
      });

      const data = await res.json();
      console.log(data);

      dispatch(uiActions.setIsLoading(false));
      router.push("/dashboard");
    } catch (error) {
      dispatch(uiActions.setIsLoading(false));
    }
  }

  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 h-[100dvh]">
      {isLoading && <Modal />}
      <Navbar />
      <div className="w-full max-w-sm mx-auto overflow-hidden rounded-lg mt-24 ">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 ">
            Login or create account
          </p>

          <form onSubmit={loginHandler}>
            <div className="w-full mt-4">
              <label htmlFor="email" className="text-black">
                Email Address
              </label>
              <input
                id="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#ffe08a]"
                type="email"
                ref={emailInputRef}
                placeholder="Email Address"
                aria-label="Email Address"
              />
              {isEmailError && (
                <p className="text-black flex gap-2 items-center mt-2">
                  <span>
                    <Image src={RedCancel} width={20} height={20} alt="" />
                  </span>{" "}
                  Invalid email
                </p>
              )}
            </div>

            <div className="w-full mt-4">
              <label htmlFor="password" className="text-black">
                Password
              </label>
              <input
                id="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#ffe08a]"
                type="password"
                ref={passwordInputRef}
                placeholder="Password"
                aria-label="Password"
              />
              {isPasswordError && (
                <p className="text-black flex gap-2 items-center mt-2">
                  <span>
                    <Image src={RedCancel} width={20} height={20} alt="" />
                  </span>{" "}
                  Invalid password input
                </p>
              )}
            </div>

            <button
              className="w-full mt-4 px-6 py-2 text-sm font-medium tracking-wide text-gray-500 capitalize transition-colors duration-300 transform bg-[#ffe08a] rounded-lg hover:bg-[#FFB600] focus:outline-none focus:ring focus:ring-[#ffe08a] focus:ring-opacity-50"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center">
          <span className="text-sm text-gray-600 dark:text-gray-900">
            Do not have an account?{" "}
          </span>

          <Link
            href="/auth"
            className="mx-2 text-sm font-bold text-[#3155D3] hover:underline"
          >
            sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
