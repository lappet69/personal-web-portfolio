import React from 'react'

interface Props {
    name?: string;
    job?: string;
    desc?: string;
}

const HeroText = ({ name, job, desc }: Props) => {
    return (
        <>
            <div className='flex justify-center items-center perspective-100'>
                <p className='text-lg text-white'>{name} / {job} </p>
            </div>

        </>
    )
}

export default HeroText