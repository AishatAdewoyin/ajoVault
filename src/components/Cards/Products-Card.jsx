import React from "react";
import SmallHeaders from "../headers/headers/SmallHeaders";
import Paragraph from "../paragraphs";

function ProductsCard({ icon, h2, h4 }) {
  return (
    <div className="bg-white shadow-lg gap-5 border border-t-primary border-t-[6px] rounded-t-[10px] lgss:w-1/5 flex flex-col justify-center items-center py-6">
      <img className="h-[100px] w-[100px]" src={icon} />
      <div className="px-7 pt-3">
        <div className="w-[70%] pb-4">
          <h2 class="font-bold text-xl capitalize">{h2}</h2>
        </div>
        <h4 class="font-normal text-[18px]">{h4}</h4>
      </div>
    </div>
  );
}

export default ProductsCard;
