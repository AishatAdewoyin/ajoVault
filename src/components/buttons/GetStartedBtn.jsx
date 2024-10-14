import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function GetStartedBtn() {
  return (
    <Fragment>
      <Link to={"/signup"}>
        <button className="px-5 py-2 bg-primary text-white capitalize text-[20px] rounded-[8px]">get started</button>
      </Link>
    </Fragment>
  );
}

export default GetStartedBtn;
