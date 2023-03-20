import { IPortfolio } from '@/interface/interface'
import 'react-multi-carousel/lib/styles.css'
import ImageCarousel from './ImageCarousel'

interface Props {
    portfolio: IPortfolio
    images: any
}

const Portfolio = ({ portfolio, images }: Props) => {
    return (
        <div className='flex flex-col items-center  rounded-lg shadow-lg ' >
            <div className='w-full flex'>
                <ImageCarousel images={images} />
            </div>
            <div className='w-full flex flex-col  p-3 gap-2'>
                <p className='text-lg'>{portfolio.title}</p>
                {/* <p className='text-justify flex flex-wrap overflow-hidden hover:overflow-y-auto'>{cutStr(portfolio?.description, 150)}</p> */}

            </div>
        </div >
    )
}

export default Portfolio