import MainNavbar from '@/components/MainNavbar'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ListPortfolio from '@/components/ListPortfolio'
import { fetchLocalData } from '@/utils/global'
import { IPortfolio, IPortfolioImage } from '@/interface/interface'

interface Props {
    portfolios: IPortfolio[];
    images?: IPortfolioImage[];
}
const index = ({ portfolios }: Props) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <div className='w-screen flex flex-col items-center justify-center'>
                <div className='bg-gradient-to-t  from-[#2C2C2C] via-[#1C1C1C] to-[#0D0D0D] drop-shadow-2xl'>
                    <MainNavbar />
                </div>
                <div className=' px-8 md:px-14 lg:px-22'>
                    <ListPortfolio portfolios={portfolios} />
                </div>
            </div>
        </>
    )
}

export default index
export async function getStaticProps() {
    let data = fetchLocalData()
    let portfolios = data.map((item) => {
        return { _id: item._id, title: item.title, description: item.description, imageSrc: item?.imageSrc?.map((el, id) => { return { id: el.id, ref: (el?.ref || null) } }), demoUrl: item.demoUrl };
    });
    return await {
        props: {
            portfolios,
        },
    };
}