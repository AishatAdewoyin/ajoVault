import React, { useState, useEffect } from "react";
import OtpInput from "../inputs/otpInputs";
import { useNavigate } from "react-router";

function FourDigitPin() {
  const navigate = useNavigate();
  const [pin, setPin] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });
  const [isBtnActive, setBtnAction] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/\D/g, "");
    setPin((prevPin) => ({
      ...prevPin,
      [name]: sanitizedValue.slice(0, 1),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user/home");
  };

  useEffect(() => {
    const mandatoryFields = ["num1", "num2", "num3", "num4"];
    const allMandatoryFieldsFilled = mandatoryFields.every(
      (field) => pin[field].trim() !== ""
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
  }, [pin]);

  return (
    <div className="flex flex-col justify-center items-center bg-white lgss:w-[30%] w-[70%] p-5 rounded-[16px]">
      <h2 className="text-[1.6rem] text-center">
        Lastly create a 4-digit pin you won't forget
      </h2>
      <h4 className="text-[12px] text-center">
        You will have to input this pin whenever you need to sign in after being
        out for a while
      </h4>
      <form className="w-full flex justify-center items-center flex-col">
        <div className="flex justify-between items-center w-[70%] mt-4">
          <OtpInput type="tel" name="num1" id="num1" change={handleChange} />
          <OtpInput type="tel" name="num2" id="num2" change={handleChange} />
          <OtpInput type="tel" name="num3" id="num3" change={handleChange} />
          <OtpInput type="tel" name="num4" id="num4" change={handleChange} />
        </div>
        <button
          className="bg-primary w-full p-2 text-white mt-4"
          style={isBtnActive}
          onClick={handleSubmit}
        >
          next
        </button>
      </form>
    </div>
  );
}

export default FourDigitPin;
