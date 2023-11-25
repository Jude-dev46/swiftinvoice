'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import naija from '../../public/naija.png';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const Signup = () => {
  const schema = yup.object().shape({
    businessName: yup.string().required('Business Name is required'),
    businessField: yup.string().required('Business Field is required'),
    date: yup.string().required('Input is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    phoneNo: yup.string().required('Phone number is required'),
    password: yup.string().min(6, 'Password is too short').required('Password is required'),
    confirm: yup
      .string()
      .required('Confirm your password')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async(data, e) => {
    e.preventDefault();
    alert("Hello")
    console.log(data)
    try {
      const res = await axios.post('/api/auth',data)
      console.log(res)
    } catch (error) {
        console.log(error)
    }
  };

  const [state, setState] = useState(0);
  const handleButton = (e) => {
    e.preventDefault();
    setState((prev) => prev + 1);
  };

  return (
    <div className="h-[100vh] bg-gradient-to-br from-orange-100 via-red-100 to-violet-100 pt-28 w-full flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full px-12 py-4 w-full lg:w-1/3">
        <div className="flex flex-row w-full space-x-3 mb-3">
          <button
            onClick={() => setState(0)}
            className={
              state === 0
                ? 'w-1/2 h-[5px] bg-yellow-500 rounded-md'
                : 'w-1/2 h-[5px] bg-neutral-200 rounded-md'
            }
          ></button>
          <button
            onClick={() => setState(1)}
            className={
              state === 1
                ? 'w-1/2 h-[5px] bg-yellow-500 rounded-md'
                : 'w-1/2 h-[5px] bg-neutral-200 rounded-md'
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
                className="bg-transparent border-2 border-black rounded-md outline-none px-2 py-1.5 text-lg lg:text-xl text-black"
                {...register('businessname')}
              />
            </div>

            <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-3">
              <label htmlFor="business"> Business Field*</label>
              <input
                type="text"
                id="bfield"
                placeholder="e.g Cathering"
                className="bg-transparent border-2 border-black rounded-md outline-none px-2 py-1.5 text-lg lg:text-xl text-black"
                {...register('businessfield')}
              />
            </div>

            <div className="flex flex-row w-full text-black text-lg lg:text-xl my-3 space-x-2">
              <div className="my-input flex flex-col w-24 mr-2.5 ">
                <label htmlFor="business">D.O.B*</label>
                <input
                  type="number"
                  id="dob"
                  placeholder="DD/MM"
                  onInput={(e) => {
                    e.target.value = e.target.value.slice(0, 4).replace(/\D/g, '');
                  }}
                  className="bg-transparent text-center border-2 border-black rounded-md outline-none px-2 py-1.5 text-lg lg:text-xl text-black"
                  {...register('date')}
                />
              </div>

              <div className="my-input flex flex-col w-60 lg:w-full lg:text-xl">
                <label htmlFor="business">Phone number* </label>
                <div className="flex flex-row  border-2 border-black rounded-md ">
                  <Image src={naija} width={60} height={5} alt="Naija" className="px-1 w-8 h-5 mt-[8px]" />
                  <span className="font-bold text-xl mt-[5px] ">{'|'}</span>
                  <input
                    type="number"
                    id="number"
                    placeholder="901 234 5678"
                    className="w-full bg-transparent outline-none px-1 py-1.5 text-lg lg:text-xl text-black"
                    {...register('phoneNo')}
                  />
                </div>
              </div>
            </div>

            <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-3">
              <label htmlFor="business">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="abcd@gmail.com"
                className=" bg-transparent border-2 border-black rounded-md outline-none px-2 py-1.5 text-lg lg:text-xl text-black"
                {...register('email')}
              />
               <p className="text-black text-sm h-3 w-full">*This is a required field</p>
            </div>
            <div className="w-full">
              <button
                onClick={handleButton}
                id="nextBtn"
                className={
                  state
                    ? 'w-full opacity-40 text-center text-black bg-yellow-500 px-10 lg:px-24 py-1.5 text-lg lg:text-xl lg:py-2 rounded-md mt-6 mb-2'
                    : 'w-full text-center text-black bg-yellow-500 px-10 lg:px-24 py-1.5 text-lg lg:text-xl lg:py-2 rounded-md mt-6 mb-2'
                }>
                Next
              </button>
            </div>
          </div>
        )}
        {state === 1 && (
          <div>
            <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-3">
              <label htmlFor="business" className="">
                {' '}
                Create Password*
              </label>
              <input
                type="password"
                id="password"
                className="bg-transparent border-2 border-black rounded-md outline-none px-2 py-1.5 lg:text-xl text-lg text-black"
                {...register('password')}
              />
              <p className="text-black text-sm h-3 w-full">Enter a mixture letters, numbers and symbols</p>
            </div>

            <div className="my-input flex flex-col w-full text-black text-lg lg:text-xl my-5">
              <label htmlFor="business" className="">
                Confirm Password*
              </label>
              <input
                type="password"
                id="confirm"
                className="bg-transparent border-2 border-black rounded-md outline-none px-2 py-1.5 text-lg lg:text-xl text-black"
                {...register('confirm')}
              />
            </div>

            <div className="w-full">
            
                <button
                    className={
                      state
                        ? 'w-full opacity-40 text-center text-black bg-yellow-500 px-10 lg:px-24 py-1.5 text-lg lg:text-xl lg:py-2 rounded-md mt-6 mb-2'
                        : 'w-full text-center text-black bg-yellow-500 px-10 lg:px-24 py-1.5 text-lg lg:text-xl lg:py-2 rounded-md mt-6 mb-2'
                    }>
                    Sign Up
                </button>
             
              <span className="flex flex-row space-x-1 justify-center items-center">
                <p className="text-black text-sm lg:text-lg">Have an account?</p>
                <Link href="/auth/login">
                  <p className="text-blue-700 text-sm lg:text-lg hover:cursor-pointer">Log in here</p>
                </Link>
              </span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
