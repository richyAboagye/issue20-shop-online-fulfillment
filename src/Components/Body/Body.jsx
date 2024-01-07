import React from 'react'
import rightArrow from "../../Assets/rightArrow.svg"
import AddYourDetails from './BodyComponents/AddYourDetails/AddYourDetails'
import LearnAboutSofs from './BodyComponents/LearnAboutSofs/LearnAboutSofs'

const Body = () => {
  return (
    <div className='flex-1 bg-[#F0F0F0]'>
      <div className='flex'>
        <h4 className='text-[20px] font-body text-[#938f96] font-medium ml-[28px] mt-5 w-[93px] h-[33px] pt-[4px] box-border'>Settings</h4>
        <img className='w-[6px] h-[10px] mt-[36px] ml-[15.5px] cursor-pointer' src={rightArrow} />
        <h4 className='text-[20px] font-body font-medium mt-5 ml-[35.5px] text-[#0f1111] w-[297px] h-31px pt-1 box-border '>Shop Online Fulfillment Services</h4>
      </div>
      <h2 className='text-[32px] font-semibold mt-[22px] mb-[33px] leading-[52px] text-[black] ml-[27px] font-body'>Shop Online Fulfillment Services</h2>
      <div className='w-[1187px] h-[453px] bg-[#cac5cd] mt-[53px] mx-auto mb-[66px] rectangle'></div>
      <h4 className='text-[25px] font-semibold ml-[22px] mb-[60px] leading-[30px] text-{#313133} font-body '>Add your details</h4>
      <div className='flex gap-[89px] ml-[50px]'>
        <AddYourDetails header={"Contact"} details={"We’ll contact this person for inventory updates or questions"} />
        <AddYourDetails header={"Returns"} details={"Tell us where to send SOFS inventory"} />
        <AddYourDetails header={"Billing"} details={"We’ll use this cover your remaining balance after sales"} />
      </div>
      <h4 className='text-[25px] leading-[30px] font-body mt-[59px] ml-[19px] mb-[53px] font-bold '>Learn more about SOFS</h4>
      <div className='flex gap-[64px] ml-[25px] mb-[69px]'>
        <LearnAboutSofs header={"Why fulfill with SONNY?"} details={"Grow and scale your business with one of the world’s largest supply change"} action={"See benefits"} />
        <LearnAboutSofs header={"SOFS pricing"} details={"Save on fulfillment with simple pricing and no hidden fees"} action={"Estimate fees"} />
      </div>
    </div>
  )
}

export default Body