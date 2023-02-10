export interface IPortfolio {
    _id?: number;
    title?: string;
    description?: string | undefined;
    imageSrc?: IPortfolioImage[];
    demoUrl?: string;
}

export interface IPortfolioImage {
    id: number;
    ref?: StaticImage;
}
export interface StaticImage {
    src: string;
    height: number;
    width: number;
    blurDataURL: string;
}