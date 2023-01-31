import React from 'react'
import { TbMovie } from 'react-icons/tb'
import { FcReading } from 'react-icons/fc'
import { IoGameControllerOutline } from 'react-icons/io5'
import { MdOutlineSportsKabaddi } from 'react-icons/md'

const hobbies = [
    { id: 1, name: 'Movies', icon: <TbMovie /> },
    { id: 2, name: 'Games', icon: <IoGameControllerOutline /> },
    { id: 3, name: 'Reading', icon: <FcReading /> },
    { id: 4, name: 'Sports', icon: <MdOutlineSportsKabaddi /> },
]
const Hobbies = () => {
    return (
        <div className=' max-w-[360px] py-10'>
            <h2 className='text-center text-2xl pb-5'>Hobbies</h2>
            <div className='w-full flex gap-10 flex-wrap items-center justify-center'>
                {hobbies.map((hobby) => (
                    <div key={hobby.id} className='flex flex-col  items-center justify-center p-5 shadow-2xl rounded-b-full'>
                        <p className='text-4xl'> {hobby.icon}</p>
                        <p className='text-md'>{hobby.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hobbies