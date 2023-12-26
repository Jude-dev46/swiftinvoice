"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../components/store/uislice";
import { yupResolver } from "@hookform/resolvers/yup";
import Navbar from "../components/ui/Navbar";
import Modal from "../components/ui/Modal";
import * as yup from "yup";
import axios from "axios";

const Signup = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(0);
  const [message, setMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState();
  const router = useRouter();

  const isLoading = useSelector((state) => state.ui.isLoading);
  const isError = useSelector((state) => state.ui.isError);

  const schema = yup.object().shape({
    businessName: yup.string().required("Business Name is required"),
    businessField: yup.string().required("Business Field is required"),
    date: yup.string().required("Input is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    phoneNo: yup.string().required("Phone number is required"),
    password: yup
      .string()
      .min(6, "Password is too short")
      .required("Password is required"),
    confirm: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password")], "Passwords do not match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleButton = (e) => {
    e.preventDefault();
    setState((prev) => prev + 1);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();

    dispatch(uiActions.setIsLoading(true));
    try {
      const res = await axios.post("/api/auth", data);
      setMessage(res.data.message);

      if (res.data.status === true) {
        dispatch(uiActions.setIsLoading(false));
        router.push("/auth/login");
      }
    } catch (error) {
      setMessage(error.message);
      dispatch(uiActions.setIsLoading(false));
      dispatch(uiActions.setIsError(true));
    }
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="h-[100vh] bg-gradient-to-br from-orange-100 via-red-100 to-violet-100 pt-28 w-full flex flex-col justify-center items-center">
        {isLoading && <Modal />}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full px-12 py-4 w-full lg:w-1/3"
        >
          <div className="flex flex-row w-full space-x-3 mb-3">
            <button
              onClick={() => setState(0)}
              className={
                state === 0
                  ? "w-1/2 h-[5px] bg-yellow-500 rounded-md"
                  : "w-1/2 h-[5px] bg-neutral-200 rounded-md"
              }
            ></button>
            <button
              onClick={() => setState(1)}
              className={
                state === 1
                  ? "w-1/2 h-[5px] bg-yellow-500 rounded-md"
                  : "w-1/2 h-[5px] bg-neutral-200 rounded-md"
              }
            ></button>
          </div>
          {state === 0 && (
            <div>
              <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-3">
                <label htmlFor="business" className="">
                  Business Name*
                </label>
                <input
                  type="text"
                  id="bname"
                  placeholder="e.g Benny's cakes"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none  focus:ring-[#ffe08a]"
                  {...register("businessName")}
                />
              </div>

              <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-3">
                <label htmlFor="business"> Business Field*</label>
                <select
                  id="bfield"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none  focus:ring-[#ffe08a]"
                  value={selectedValue}
                  onChange={handleSelectChange}
                  {...register("businessField")}
                >
                  <option value={"Accounting"}>Accounting</option>
                  <option value={"Education"}>Education</option>
                  <option value={"Finance"}>Finance</option>
                  <option value={"Health Services"}>Health Services</option>
                  <option value={"Human Resources"}>Human Resources</option>
                  <option value={"IT Services"}>IT Services</option>
                  <option value={"Sales & Marketing"}>Sales & Marketing</option>
                </select>
              </div>

              <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-3">
                <label htmlFor="business">Phone number*</label>
                <input
                  type="text"
                  id="number"
                  placeholder="+234 901 234 5678"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none  focus:ring-[#ffe08a]"
                  {...register("phoneNo")}
                />
              </div>

              <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-3">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="abcd@gmail.com"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none  focus:ring-[#ffe08a]"
                  {...register("email")}
                />
                {/* <p className="text-black text-sm h-3 w-full">
                  *This is a required field
                </p> */}
              </div>

              <div className="w-full">
                <p
                  onClick={handleButton}
                  id="nextBtn"
                  className={
                    state
                      ? "w-full opacity-40 text-center text-black bg-yellow-500 px-10 lg:px-24 py-1.5 text-lg lg:text-xl lg:py-2 rounded-md mt-6 mb-2 hover:cursor-pointer"
                      : "w-full text-center text-black bg-yellow-500 px-10 lg:px-24 py-1.5 text-lg lg:text-xl lg:py-2 rounded-md mt-6 mb-2 hover:cursor-pointer"
                  }
                >
                  Next
                </p>
              </div>
            </div>
          )}
          {state === 1 && (
            <div>
              <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-3">
                <label htmlFor="password">Create Password*</label>
                <input
                  type="password"
                  id="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none  focus:ring-[#ffe08a]"
                  {...register("password")}
                />
                <p className="text-black text-sm h-3 w-full">
                  Enter a mixture of letters, numbers, and symbols
                </p>
              </div>

              <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-5">
                <label htmlFor="confirm">Confirm Password*</label>
                <input
                  type="password"
                  id="confirm"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none  focus:ring-[#ffe08a]"
                  {...register("confirm")}
                />
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full text-center text-black bg-yellow-500 px-10 lg:px-24 py-1.5 text-lg lg:text-xl lg:py-2 rounded-md mt-6 mb-2"
                >
                  Sign Up
                </button>

                <span className="flex flex-row space-x-1 justify-center items-center">
                  <p className="text-black text-sm lg:text-lg">
                    Have an account?
                  </p>
                  <Link href="/auth/login">
                    <p className="text-blue-700 text-sm lg:text-lg hover:cursor-pointer">
                      Log in here
                    </p>
                  </Link>
                </span>
              </div>
            </div>
          )}
          {message && <p className="text-red-600">{message}</p>}
          {isError && (
            <p className="text-red-600">An error occurred. Try again!</p>
          )}
        </form>
      </div>
    </>
  );
};

export default Signup;
