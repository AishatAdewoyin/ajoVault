import React from "react";
import Button from "../Button";

const Access = () => {
 return (
  <div className="p-4">
   <p className="text-xl font-semibold mb-2">Quick Access</p>
   <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
    <Card
     title="Pooled Contribution"
     subtitle="Join a batch savings pool based on your budget"
     button={<Button link="/" color="#5A47CF" text="Join Now" textColor="white" width="100%" />}
    />
    <Card title="Personal Savings" subtitle="Start a personal savings to meat a your goal" button={<Button link="/" color="#5A47CF" text="Start Now" textColor="white" width="100%" />} />
    <Card title="Create a Saving plan" subtitle="Invite friends to create a pooled contribution that works for all" button={<Button link="/" color="#5A47CF" text="Create Now" textColor="white" width="100%" />} />
   </div>
  </div>
 );
};

const Card = ({ title, subtitle, button }) => {
 return (
  <div className="w-full p-4 border-[1px] border-r-[6px] border-b-[6px] border-slate-300 border-r-indigo-600 border-b-indigo-600 border-spacing-8 relative overflow-hidden group rounded-l-lg rounded-t-lg bg-white">
   <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
   <h3 className="text-lg font-semibold text-slate-950 mb-3 group-hover:text-white relative z-10 duration-300">
    {title}
   </h3>
   <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
    {subtitle}
   </p>
   <div className=" group-hover:text-violet-200 relative z-10 duration-300">
    {button}
   </div>


  </div>
 );
};

export default Access;
