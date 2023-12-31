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
  const [message, setMessage] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const isLoading = useSelector((state) => state.ui.isLoading);

  async function loginHandler(e) {
    e.preventDefault();

    try {
      setMessage("");
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

      if (!data.status) {
        setMessage(data.message);
      }

      const userData = {
        userId: data.data._id,
        businessName: data.data.businessName,
        businessField: data.data.businessField,
        email: data.data.email,
        date: data.data.createdAt,
      };
      localStorage.setItem("data", JSON.stringify(userData));
      dispatch(uiActions.setIsAuth(true));

      router.push("/dashboard");
    } catch (error) {
      dispatch(uiActions.setIsLoading(false));
    }
  }

  return (
    <>
      <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 h-[100vh]">
        {isLoading && <Modal />}
        <Navbar />
        <div className="flex justify-center">
          <div className="w-full max-w-sm mx-auto overflow-hidden rounded-lg absolute top-32">
            <div className="px-6 py-4">
              <h3 className="mt-3 text-2xl font-medium text-center text-gray-600">
                Welcome Back
              </h3>

              <p className="text-md text-center text-gray-500">
                Login or create an account
              </p>

              <form onSubmit={loginHandler} className="mt-4">
                <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-3">
                  <label htmlFor="email" className="text-black">
                    Email Address
                  </label>
                  <input
                    id="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none  focus:ring-[#ffe08a]"
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

                <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-3">
                  <label htmlFor="password" className="text-black">
                    Password
                  </label>
                  <input
                    id="password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none  focus:ring-[#ffe08a]"
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
                  className="w-full mt-4 px-6 py-2 text-lg font-medium tracking-wide text-gray-500 capitalize transition-colors duration-300 transform bg-[#ffe08a] rounded-lg hover:bg-[#FFB600] focus:outline-none focus:ring focus:ring-[#ffe08a] focus:ring-opacity-50"
                  type="submit"
                >
                  Sign In
                </button>
                <p className="text-red-600">{message}</p>
              </form>
            </div>

            <div className="flex items-center justify-center text-center">
              <span className="text-base text-gray-600 dark:text-gray-900">
                Do not have an account?{" "}
              </span>

              <Link
                href="/auth"
                className="mx-2 text-base font-bold text-[#3155D3] hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
