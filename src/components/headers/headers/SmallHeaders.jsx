import React from "react";

function SmallHeaders(prop) {
  return (
    <div className="text-primary font-bold text-[2.4rem] py-6">
      <h1>{prop.headertext}</h1>
    </div>
  );
}

export default SmallHeaders;
