import React from "react";

function OtpInput(props) {
  return (
    <input
      maxLength={1}
      inputMode="numeric"
      pattern="[0-9]*"
      className="p-3 border-primary border h-10 rounded-[8px] w-10 outline-none"
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.change}
    />
  );
}

export default OtpInput;
