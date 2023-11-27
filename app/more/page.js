'use client'
import React, { useState, useEffect, useRef } from 'react';
const ImageUpload = () => {
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
    // Programmatically trigger a click on the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Upload Image</button>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
      />

      {selectedImage && (
        <div>
          <h2>Selected Image Preview:</h2>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;




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
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-8 md:px-12 lg:px-24 py-8">
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
              {selectedImage ? (
              <div>
                <Image src={selectedImage} alt="Selected" width={100} height={20} style={{ maxWidth: '100%' }}/>
              </div>
            ) : }
           <button onClick={handleButtonClick}>
              <Image
                src={profile_edit_icon}
                alt=""
                className="absolute bottom-1 left-44 "
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

      <div className="mt-8 bg-white   justify-start rounded-lg w-[90%] mx-auto h-auto text-black gap-4 p-4 grid grid-cols-3 grid-rows-1">
        <div className="self-center justify-self-start">
            <ul className="text-[1.2rem] space-y-3 ">
                <li className="">Name</li>
                <li className="">Business Name</li>
                <li className="">Business Field</li>
                <li className="">Email</li>
                <li className="">Date Of Birth</li>
                <li className="">Phone Number</li>


            </ul>
        </div>
        <div className="self-center justify-self-start">

        <ul className="text-[1.2rem] space-y-3">
                <li className="">John James</li>
                <li className="">Betty's Cake</li>
                <li className="">Catering</li>
                <li className="">johnjames@gmail.com</li>
                <li className="">14th July</li>
                <li className="">09012345678</li>


            </ul>
        </div>

        {/* <div className="self-start justify-self-center w-8  ">
        </div> */}
      </div>
    </div>
  );
};

export default MainAccount;


<Image
src={profile_edit_icon}
alt=""
className="absolute bottom-1 left-44 "
/>