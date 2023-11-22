'use client'
import React from 'react'
import Image from 'next/image'
import part1 from '../public/Image.png'
import part2 from '../public/Image2.png'
import text from '../public/text.png'

function welcomePage() {
  return (
    <div className=''>
      <div className="bg-neutral-100 bg-opacity-50 backdrop-blur-[10px] flex flex-row items-center fixed w-full px-8 py-1 lg:py-2 lg:px-14">
         <div>
            <Image src={part1} width={30} height={30} className=''/>
            <Image src={part2} width={30} height={30} className='-mt-[10px]'/>
         </div>
         <div className='pl-2'>
           <Image src={text} width={130} height={70} className='' />
         </div>
      </div>

      <div className='h-[100vh] bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 flex flex-col justify-center items-center pt-10'>
         <div>
            <Image src={part1} width={80} height={80} className=''/>
            <Image src={part2} width={80} height={80} className='-mt-[30px]'/>
         </div>
         <div>
           <div className='text-3xl lg:text-5xl font-medium pl-[14px] lg:pl-[24px] lg:my-2 mt-3'> 
              <span className='font-bold text-black'>Welcome<br />to </span>
              <span className='text-orange-600'>Swift</span>
              <span className='text-yellow-500'>Invoice</span>
           </div>
           <p className="text-neutral-400 text-base lg:text-2xl font-normal pl-[14px] lg:pl-[24px]">Invoice Keeping. Made Easy.</p>
           <button className='font-bold bg-yellow-500 px-10 lg:px-24 py-1 text-lg lg:text-xl lg:py-2 rounded-md mt-6 mb-2'>Open free account</button>
           <span className='flex flex-row space-x-1 justify-center items-center'>
            <p className='text-black text-sm lg:text-lg'>Have an account?</p>
            <p className='text-blue-700 text-sm lg:text-lg'>Log in here</p>
           </span>
         </div>
      </div>
     
    </div>
  )
}

export default welcomePage