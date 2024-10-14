import React, { useState } from "react";
import InputOtp from "./InputOtp";
import { Fragment } from "react";

function CheckOtp() {
  const [showOtp, setOtp] = useState(false);
  const [displayCheckOtp, hideCheckOtp] = useState(true);

  const handleBtn = () => {
    setOtp(true);
    hideCheckOtp(false);
  };

  return (
    <Fragment>
      {showOtp && <InputOtp />}
      {displayCheckOtp && (
        <div className="flex flex-col justify-center items-center bg-white lgss:w-[30%] w-[70%] p-5 rounded-[16px]">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="layer1">
              <path
                d="M 0 4 L 0 17 L 9 17 L 9 16 L 1.6621094 16 L 7.296875 11.753906 L 7.2988281 11.751953 L 6.46875 11.126953 L 6.4667969 11.128906 L 1 15.246094 L 1 5.9335938 L 9.0488281 12 L 10.951172 12 L 19 5.9335938 L 19 12.671875 L 20 13.671875 L 20 4 L 0 4 z M 1.6621094 5 L 18.337891 5 L 10.376953 11 L 9.6230469 11 L 1.6621094 5 z M 15 13 L 18 16 L 11 16 L 11 17 L 18 17 L 15 20 L 16.5 20 L 20 16.5 L 16.5 13 L 15 13 z "
                style={{
                  fill: "rgba(90, 71, 207, 1)",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0px",
                }}
              />
            </g>
          </svg>
          <h2 className="text-primary text-[20px] px-[25%] text-center pt-2">
            Check your email for an OTP
          </h2>
          <button className="bg-primary w-full p-2 text-white mt-4" onClick={handleBtn}>Next</button>
        </div>
      )}
    </Fragment>
  );
}

export default CheckOtp;
