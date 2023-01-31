import React from 'react'
import Image from 'next/image'
import HeroText from './HeroText'
import MainNavbar from './MainNavbar'

const HeroSection = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center drop-shadow-2xl relative bg-bg-2 bg-fixed bg-no-repeat bg-cover bg-center '>
            <MainNavbar />
            <div className="w-full  flex flex-col items-center justify-center py-12  relative  ">
                <div className='absolute h-full w-full bg-cardOverlay '>
                </div>
                {/* <Image  alt="" /> */}
                <div className='min-h-[320px] min-w-[320px]  bg-white rounded-full  border-white border-4  bg-profile bg-center bg-cover'>
                </div>
                <HeroText name='Andre Sinabariba' job='Software Engineer' desc='' />
            </div>
            {/* <div className='w-full flex flex-col items-center justify-center py-5 gap-10'>
            </div> */}
        </div>
    )
}

export default HeroSection