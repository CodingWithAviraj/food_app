"use client"
import { useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomCarousel = ({ children, itemsForDesktop = 3, itemsForMobile = 1, itemsForTab = 2, isShowArrows = false }) => {
    const responsive = useMemo(() => {
        return {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: itemsForDesktop
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: itemsForTab
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: itemsForMobile
            }
        }

    }, [itemsForDesktop, itemsForMobile, itemsForTab])

    return <Carousel responsive={responsive} arrows={isShowArrows}>{children}</Carousel>

}
export default CustomCarousel;