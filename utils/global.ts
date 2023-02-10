import { portfolios } from '../data/portfolio'
export const defaultImg = (): string => "img"

export const fetchLocalData = () => portfolios;

export const cutStr = ((str: string | undefined, length: number) => str?.slice(0, length))