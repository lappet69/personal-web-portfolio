import { IPortfolio, IPortfolioImage } from '@/interface/interface'
import React from 'react'
import ImageCarousel from './ImageCarousel'
import Portfolio from './Portfolio'

interface Props {
    portfolios: IPortfolio[]
    // imgPortfolio: IPortfolioImage[]
}

const ListPortfolio = ({ portfolios }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 py-5 drop-shadow-2xl">
            {portfolios.map((item, idx) => {
                let images = item.imageSrc?.map((item, idx) => { return { id: idx, url: item.ref?.src } })
                return (
                    <Portfolio portfolio={item} key={idx} images={images} />)
            }
            )}
        </div>
    )
}


export default ListPortfolio