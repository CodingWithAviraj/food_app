import Image from "next/image";
import everydayOffer from "@/resource/everydayOffer.jpg";
import fridayOffer from "@/resource/fridayOffer.png";
import CustomCarousel from "./common/CustomCarousel";
const ImageSwiper = () => {

    return (
        <div>
            <CustomCarousel itemsForDesktop={1} itemsForMobile={1} itemsForTab={2} isShowArrows={true}>
                <Image src={everydayOffer} />
                <Image src={fridayOffer}  className="object-fill w-100"/>
            </CustomCarousel>

        </div>
    )
}
export default ImageSwiper;