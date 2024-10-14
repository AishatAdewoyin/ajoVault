import React from 'react'
import Header from '../header';
import Button from '../Button';
import SliderRange from './Slider';
import QuickAccess from './access'
const home = () => {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-3 gap-5 mt-4'>
        <div className="bg-[#E2DDFE] col-span-2 p-6 shadow-md rounded-lg px-8 py-6 text-center flex justify-center align-middle flex-col gap-4">

          <h5 className="mb-2 text-xl font-semibold leading-tight text-neutral-800 ">
            Complete your KYC to set up your account
          </h5>

          <SliderRange />

          <Button link='/' color='#5A47CF' text='Continue' textColor='white' width='20%' />
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg px-8 py-6 max-w-md">
          <h5 className="mb-2 text-xl font-semibold leading-tight text-neutral-800 ">
            To Do List
          </h5>
          <span className='flex mb-4 gap-2'><input type="radio" className=" bg-[#5a47cf] " /><p className=''>Complete KYC</p></span>
          <span className='flex mb-4 gap-2'><input type="radio" className=" bg-[#5a47cf] " /><p>Link bank for a direct debit</p></span>
          <span className='flex mb-4 gap-2'><input type="radio" className=" bg-[#5a47cf] " /><p>Join a saving plan</p></span>
          <span className='flex mb-4 gap-2'><input type="radio" className=" bg-[#5a47cf] " /> <p>Invite a friend to earn bonus</p></span>

        </div>
      </div>
      <QuickAccess />

    </div>
  )
}

export default home