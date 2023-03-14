import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

const MainNavbar = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    return (
        <header className="w-screen  bg-transparent border-none abosolute py-4 px-6 leading-6 bg-cover lg:py-5 lg:px-12 ">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl text-gray-700">
                <Link className="cursor-pointer" href="/"><Image height={50} width={50} className="block max-w-full h-14 align-middle" alt="No alt" src={'/asset/logo_transparent.png'} /></Link>
                <nav className="hidden flex-row justify-center items-center w-auto font-semibold gap-x-12 md:flex text-white">
                    <Link className="cursor-pointer hover:scale-110" href="/portfolio">Portfolio</Link>
                </nav>
                <div className='ml-auto relative  items-center md:hidden z-50'>
                    <FiMenu className='text-white text-3xl cursor-pointer hover:scale-110' onClick={() => setToggle(!toggle)} />
                    {toggle && (
                        <div className="transform  " >
                            <nav className="absolute  right-0 flex  flex-col p-3 bg-white rounded-lg transform shadow-xs" onMouseLeave={() => setToggle(false)} >
                                <Link className=" p-2 font-semibold border-t-0 border-r-0 border-l-0 border-b border-blue-100  border-solid cursor-pointer box-border hover:bg-slate-300" href="/portfolio" >Portfolio</Link>
                            </nav>
                        </div>
                    )}

                </div>
            </div>
        </header >
    )
}

export default MainNavbar