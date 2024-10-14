import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";
import Sidebar from "../../components/web-app/Sidebar";
import HeaderName from "../../components/web-app/HeaderName";
import Home from "../../components/dashboard-components/home/home";

const DashboardPage = () => {

  return (
    <div className="max-w-full flex flex-col lgss:flex-row ">
      <div className="w-[20%]">
        <Sidebar />
      </div>

      <div className="font-montserrat flex flex-col lgss:w-[80%] z-0">
        <div className="h-full px-[5%]">
          <HeaderName />
          <Home />
          <Home />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
