import React, { useState } from "react";
import { useEffect } from "react";
import OtpInput from "../inputs/otpInputs";
import Password from "./Password";
import { Fragment } from "react";

function InputOtp() {
  const [otp, setOtp] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });

  const [displayPassForm, hidePassForm] = useState(false);
  const [showForm, hideForm] = useState(true);
  const [isBtnActive, setBtnAction] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/\D/g, "");
    setOtp((prevOtp) => ({
      ...prevOtp,
      [name]: sanitizedValue.slice(0, 1),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hidePassForm(true);
    hideForm(false);
  };
  useEffect(() => {
    const mandatoryFields = ["num1", "num2", "num3", "num4"];
    const allMandatoryFieldsFilled = mandatoryFields.every(
      (field) => otp[field].trim() !== ""
    );

    if (allMandatoryFieldsFilled) {
      setBtnAction({
        pointerEvents: "visible",
        backgroundColor: "rgba(90, 71, 207, 1)",
      });
    } else {
      setBtnAction({
        pointerEvents: "none",
        backgroundColor: "rgba(181, 170, 252, 1)",
      });
    }
  }, [otp]);

  return (
    <Fragment>
      {displayPassForm && <Password />}
      {showForm && (
        <div className="flex flex-col justify-center items-center bg-white lgss:w-[30%] w-[70%] p-5 rounded-[16px]">
          <form action="w-full flex flex-col justify-center items-center">
            <h2 className="text-[20px] text-center">
              Enter the OTP sent to your email address
            </h2>
            <div className="flex flex-col justify-between items-center w-full my-2">
              <div className="flex justify-between items-center w-[80%] my-2">
                <OtpInput
                  type="tel"
                  name="num1"
                  id="num1"
                  change={handleChange}
                />
                <OtpInput
                  type="tel"
                  name="num2"
                  id="num2"
                  change={handleChange}
                />
                <OtpInput
                  type="tel"
                  name="num3"
                  id="num3"
                  change={handleChange}
                />
                <OtpInput
                  type="tel"
                  name="num4"
                  id="num4"
                  change={handleChange}
                />
              </div>
              <div className="pt-2">
                <h4>Didnt get the PIN ? resend in 5:00 </h4>
              </div>
            </div>
            <button
              className="bg-primary w-full p-2 text-white mt-4"
              style={isBtnActive}
              onClick={handleSubmit}
            >
              Next
            </button>
          </form>
        </div>
      )}
    </Fragment>
  );
}

export default InputOtp;
