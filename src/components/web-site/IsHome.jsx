import React from 'react';
import { Link } from 'react-router-dom';
import GetStartedBtn from '../buttons/GetStartedBtn';
import { hero } from '../../../public/assets';
function IsHome() {
  return (
    <div className="pt-7 w-full flex flex-col px-5">
      <div className="flex lgss:flex-row flex-col gap-5">
        <div className="bg-[#CCCCCC26] flex flex-col gap-8 px-5 lgss:w-1/2">
          <h1 className="font-bold lgss:text-[4rem] text-[2rem]">
            With your <span className="text-secondary">Saving</span> Power, You
            can Build <span className="text-secondary">Wealth</span>
          </h1>
          <p className="text-[20px]">
            Join other wise Nigerians to revolutionize their personal finance,
            by combining individual savings and collaborative pooled
            contributions.
          </p>
        </div>
        <div className="lgss:w-1/2 flex justify-end h-[480px]">
          <img className='h-full lgss:w-[95%]' src={hero} alt="Hero Image" />
        </div>
      </div>
      <div className="pt-2">
      <GetStartedBtn />
      </div>
    </div>
  );
}

export default IsHome