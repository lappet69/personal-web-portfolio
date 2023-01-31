import MainNavbar from '@/components/MainNavbar'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const index = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <div className='w-screen'>
                <div className='bg-gradient-to-t  from-[#2C2C2C] via-[#1C1C1C] to-[#0D0D0D] drop-shadow-2xl'>
                    <MainNavbar />
                </div>
                <div className='flex h-screen flex-col justify-center items-center'>
                    <h3>The portfolio is in the process of moving</h3>
                    <Link href='/' className='py-2 px-4 shadow-2xl bg-[#eaeaea] rounded-md hover:scale-75'>Go back</Link>
                </div>
            </div>
        </>
    )
}

export default index