import React from "react";
import SmallHeaders from "../headers/headers/SmallHeaders";
import ProductsCard from "../Cards/Products-Card";
import { icon1, icon2, icon3, icon4 } from "../../../public/assets";

function Products() {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <SmallHeaders headertext="Product features" class="products-header" />
      <div className="flex lgss:flex-row flex-col gap-6 justify-between w-[90%]">
        <ProductsCard
          icon={icon1}
          h2="individual savings"
          h4="Automated savings plans with goal setting option"
        />
        <ProductsCard
          icon={icon2}
          h2="Pooled Contributions"
          h4="Users can create or be merged to a savings pool batch"
        />
        <ProductsCard
          icon={icon3}
          h2="Community Building"
          h4="Shared achievement in community forums for financial tips, and success stories"
        />
        <ProductsCard
          icon={icon4}
          h2="Security & Privacy"
          h4="Robust encryption and secure authentication for user data"
        />
      </div>
    </div>
  );
}

export default Products;
