import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'

export type ImageType = any;

const ImageCarousel: React.FC<{ images?: ImageType[] }> = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<ImageType>();
    const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);
    useEffect(() => {
        if (images && images[0]) {
            carouselItemsRef.current = carouselItemsRef.current.slice(
                0,
                images.length
            );

            setSelectedImageIndex(0);
            setSelectedImage(images[0]);
        }
    }, [images]);

    const handleSelectedImageChange = (newIdx: number) => {
        if (images && images.length > 0) {
            setSelectedImage(images[newIdx]);
            setSelectedImageIndex(newIdx);
            if (carouselItemsRef?.current[newIdx]) {
                carouselItemsRef?.current[newIdx]?.scrollIntoView({
                    inline: "center",
                    behavior: "smooth"
                });
            }
        }
    };

    const handleRightClick = () => {
        if (images && images.length > 0) {
            let newIdx = selectedImageIndex + 1;
            if (newIdx >= images.length) {
                newIdx = 0;
            }
            handleSelectedImageChange(newIdx);
        }
    };

    const handleLeftClick = () => {
        if (images && images.length > 0) {
            let newIdx = selectedImageIndex - 1;
            if (newIdx < 0) {
                newIdx = images.length - 1;
            }
            handleSelectedImageChange(newIdx);
        }
    };

    return (
        <div className="w-full drop-shadow-2xl">
            <div
                className="w-full h-[360px] mb-2 rounded-t-lg relative"
            >
                <Image src={selectedImage?.url} alt="" width={960} height={960} className="w-full h-full" />
            </div>
            <div className="">
                <div className="carousel__images flex max-w-full overflow-x-hidden px-4 ">
                    {images &&
                        images.map((image, idx) => {
                            return (
                                <div
                                    onClick={() => handleSelectedImageChange(idx)}
                                    style={{ backgroundImage: `url(${image.url})` }}
                                    key={idx}
                                    className={`carousel__image ${selectedImageIndex === idx && "carousel__image-selected"
                                        } cursor-pointer rounded-lg`}
                                // ref={(el) => (carouselItemsRef.current[idx] = el)}
                                />
                            )
                        }

                        )}
                </div>
                <button
                    className="carousel__button carousel__button-left"
                    onClick={handleLeftClick}
                ><IoIosArrowDropleft className="text-4xl scale-125 hover:scale-150" />
                </button>
                <button
                    className="carousel__button carousel__button-right"
                    onClick={handleRightClick}
                ><IoIosArrowDropright className="text-4xl scale-125 hover:scale-150" />
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;
