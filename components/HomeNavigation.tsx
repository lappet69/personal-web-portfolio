import React, { useEffect, useState } from 'react'
import HomeSection from './HomeSection'

const HomeNavigation = () => {
    const [active, setActive] = useState("profile")

    const handleClick = (value: string) => {
        setActive(value)
    }
    return (
        <>
            <div className='flex item-center justify-center md:justify-start md:px-16 border-b border-b-slate-200 bg-gradient-to-t  from-[#2C2C2C] via-[#1C1C1C] to-[#0D0D0D] drop-shadow-2xl'>
                <ul className='flex justify-center items-center py-4 gap-8 lg:gap-32 lg:px-32 md:max-w-6xl text-white font-bold overflow-x-auto overflow-y-hidden md:overflow-x-hidden'>
                    <li className={`${active == "profile" ? 'relative before:absolute before:w-full before:h-1 before:-bottom-5 before:left-0 before:bg-yellow-400 transition-all ease-in-out duration-100 mr-auto' : 'hover:scale-110'} bottom-1 md:px-10 cursor-pointer `} onClick={() => handleClick('profile')}>Profile</li>
                    <li className={`${active == "education" ? 'relative before:absolute before:w-full before:h-1 before:-bottom-5 before:left-0 before:bg-yellow-400 transition-all ease-in-out duration-100 mr-auto' : 'hover:scale-110'} bottom-1 md:px-10 cursor-pointer `} onClick={() => handleClick('education')}>Education</li>
                    <li className={`${active == "experience" ? 'relative before:absolute before:w-full before:h-1 before:-bottom-5 before:left-0 before:bg-yellow-400 transition-all ease-in-out duration-100 mr-auto' : 'hover:scale-110'} bottom-1 md:px-10 cursor-pointer `} onClick={() => setActive(() => "experience")}>Experience</li>
                    <li className={`${active == "skill" ? 'relative before:absolute before:w-full before:h-1 before:-bottom-5 before:left-0 before:bg-yellow-400 transition-all ease-in-out duration-100 mr-auto' : 'hover:scale-110'} bottom-1 md:px-10 cursor-pointer `} onClick={() => setActive(() => "skill")}>Skills</li>
                    {/* <li className={`${active == "portfolio" ? 'relative before:absolute before:w-full before:h-1 before:-bottom-5 before:left-0 before:bg-yellow-400 transition-all ease-in-out duration-100 mr-auto' : ''} bottom-1 md:px-10 cursor-pointer `} onClick={() => setActive("portfolio")}>Portfolio</li> */}
                </ul>
            </div>
            <HomeSection activeNav={active} />
        </>
    )
}

export default HomeNavigation