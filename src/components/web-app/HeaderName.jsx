import React from 'react'
import { userImg } from '../../../public/assets/icons';
import { FaBell } from 'react-icons/fa';

const HeaderName = () => {
  return (
    <div className="flex justify-end items-endfont-montserrat">
      <div className="flex gap-6 items-center text-[20px]">
        <FaBell />
        <h1 className=" font-semibold">Isaac</h1>
        <img src={userImg} className="w-[40px] h-[40px]" alt="profile-pic" />
      </div>
    </div>
  );
}

export default HeaderName;