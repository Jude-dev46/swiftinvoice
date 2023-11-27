'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import logout_icon from "../../../public/logout-icon.svg";
import profile_icon from "../../../public/profile-icon.png";
import profile_edit_icon from "../../../public/profile-edit-icon.png";
import edit_pen from "../../../public/edit-pen.svg";

const MainAccount = () => {

  //Uploading the Admin image
  const [selectedImage, setSelectedImage] = useState(() => {
    const storedImageData = localStorage.getItem('uploadedImage');
    return storedImageData ? JSON.parse(storedImageData) : null;
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem('uploadedImage', JSON.stringify(selectedImage));
    }
  }, [selectedImage]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-6 md:px-12 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-1xl md:text-4xl text-black font-bold">Accounts</h1>
        <div className="">
          <button className="flex items-center justify-between gap-2 text-[#1916B9] border-[#1916B9] rounded-[20px] border-[2.5px] px-4 py-2">
            <Image src={logout_icon} alt="" width={20} /> Logout
          </button>
        </div>
      </div>

      <div className="mt-8 mx-auto text-black text-center space-y-3">
        <div className="relative">
              {selectedImage === false ?
              <div className='w-32 h-32 lg:w-44 lg:h-44 rounded-full'>
                <Image src={selectedImage} alt="Selected" width={100} height={100} className='rounded-full w-full h-full object-cover'/>
              </div> : 
              <div className='w-32 h-32 lg:w-44 lg:h-44 rounded-full'>
                    <Image
                      src={profile_icon}
                      alt=""
                      className='rounded-full w-full h-full object-cover'
                  />
                </div>}
           <button onClick={handleButtonClick}>
              <Image
                src={profile_edit_icon}
                alt=""
                className="absolute bottom-7 left-24 lg:bottom-5 lg:left-32 w-10 h-10 lg:w-16 lg:h-16 "
              />
           </button>
           <input  type="file"
              onChange={handleFileChange}
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
        </div>
        <p className="font-bold text-[1.5rem]">John James</p>
        <p className="text-[1.2rem]">Admin</p>
      </div>

      <div className="mt-8 bg-white justify-start rounded-lg lg:w-[50%] mx-auto text-black gap-4 p-10 grid grid-cols-2 grid-rows-1">
        <div className="self-center justify-self-start">
            <ul className="text-[1.2rem] space-y-5 ">
                <div classsName='lg:flex flex-row'>
                  <li className="font-semibold">Name</li>
                  <li className="">John James</li>
                </div>
                <div>
                  <li className="font-semibold">Business Name</li>
                  <li className="">Betty's Cake</li>
                </div>
                <div>
                  <li className="font-semibold">Business Field</li>
                  <li className="">Catering</li>
                </div>
                <div>
                  <li className="font-semibold">Email</li>
                  <li className="">johnjames@gmail.com</li>
                </div>
               <div>
                 <li className="font-semibold">Date Of Birth</li>
                 <li className="">14th July</li>
               </div>
              <div>
                <li className="font-semibold">Phone Number</li>
                <li className="">09012345678</li>
              </div>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default MainAccount;