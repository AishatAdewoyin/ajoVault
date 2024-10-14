import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdContactSupport, MdDriveFolderUpload } from "react-icons/md";
import { LiaNewspaper } from "react-icons/lia";
import { BiSolidUserCircle } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { ajoLogo } from "../../../public/assets/icons";

const Sidebar = ({ isOpen }) => {
  const [activebutton, setActiveButton] = useState(2);
  useEffect(() => {
    if (location.pathname === "/user/home") setActiveButton(1);
    else if (location.pathname === "/user/savings") setActiveButton(2);
    else if (location.pathname === "/user/withdrawal") setActiveButton(3);
    else if (location.pathname === "/user/transaction") setActiveButton(4);
    else if (location.pathname === "/user/settings") setActiveButton(5);
  }, [location.pathname]);
  return (
    <>
      <div className="h-screen  lgss:w-1/5 hidden lgss:flex flex-col shadow-sm border-r-[1px] pt-[40px] bg-primary text-white shadow-gray-400/10 pb-10 z-10 fixed">
        <div className="h-full ">
          <img src={ajoLogo} className="h-[40px] lg:h-[70px]" alt="" />
          <div className=" w-full h-full pb-10 pt-20 flex flex-col gap-3 justify-between items-center">
            <div className="flex flex-col gap-3 w-full">
              <Link
                to="/user/home"
                className={
                  activebutton === 1
                    ? "flex justify-between lg:text-[20px] text-black items-center font-bold px-8 bg-white w-full h-[60px] border-black border-l-8 rounded-l-[8px] "
                    : "flex justify-between lg:text-[20px] items-center font-bold  px-10  w-full h-[60px]"
                }
              >
                <h4 className="inline-flex gap-6 justify-center items-center">
                  <FaHome className="lg:text-[24px]" />
                  Home
                </h4>
              </Link>
              <Link
                to="/user/savings"
                className={
                  activebutton === 2
                    ? "flex justify-between lg:text-[20px] text-black items-center font-bold px-8 bg-white w-full h-[60px] border-black border-l-8 rounded-l-[8px] "
                    : "flex justify-between lg:text-[20px] items-center font-bold  px-10  w-full h-[60px]"
                }
              >
                <h4 className="inline-flex gap-8 justify-center items-center">
                  <BiSolidUserCircle className="lg:text-[24px]" />
                  Savings
                </h4>
              </Link>
              <Link
                to="/user/withdrawal"
                className={
                  activebutton === 3
                    ? "flex justify-between lg:text-[20px] text-black items-center font-bold px-8 bg-white w-full h-[60px] border-black border-l-8 rounded-l-[8px] "
                    : "flex justify-between lg:text-[20px] items-center font-bold  px-10  w-full h-[60px]"
                }
              >
                <h4 className="inline-flex gap-8 justify-center items-center">
                  <MdDriveFolderUpload className="lg:text-[24px]" />
                  Withdrawal
                </h4>
              </Link>
              <Link
                to="/user/transaction"
                className={
                  activebutton === 4
                    ? "flex justify-between lg:text-[20px] text-black items-center font-bold px-8 bg-white w-full h-[60px] border-black border-l-8 rounded-l-[8px] "
                    : "flex justify-between lg:text-[20px] items-center font-bold  px-10  w-full h-[60px]"
                }
              >
                <h4 className="inline-flex gap-8 justify-center items-center">
                  <LiaNewspaper className="lg:text-[24px]" />
                  Transaction
                </h4>
              </Link>
              <Link
                to="/user/settings"
                className={
                  activebutton === 5
                    ? "flex justify-between lg:text-[20px] text-black items-center font-bold px-8 bg-white w-full h-[60px] border-black border-l-8 rounded-l-[8px] "
                    : "flex justify-between lg:text-[20px] items-center font-bold  px-10  w-full h-[60px]"
                }
              >
                <h4 className="inline-flex gap-8 justify-center items-center">
                  <FaGear className="lg:text-[24px]" />
                  Settings
                </h4>
              </Link>
              <button className="flex border-none gap-8 text-[20px] text-white items-center justify-start px-10 font-bold w-full ">
                <MdContactSupport className="" />
                Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`absolute  top-0 left-0  h-screen bg-[#F0EDE7] w-1/2 lgss:hidden flex  flex-col py-4 px-4 pt-10   transform transition-transform duration-300 ${
            isOpen ? "translate-x-0 " : "-translate-x-full"
          }`}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
