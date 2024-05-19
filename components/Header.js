// components/TopNavigation.js
import Image from "next/image";
import brandLogoPizza from "../resource/brandLogoPizza.png";
import downArrow from "../resource/downArrow.svg";
import {
  MenuIcon,
  SearchIcon,
  CartIcon,
  LoginIcon,
  LocationIcon,
} from "../utility/SvgIcons";

const header = function () {
  return (
    <div id="header" className="shadow-sm">
      <div className="container mx-auto px-1 flex items-center justify-between max-w-[900px] w-full">
        <div
          id="left-header"
          className="flex items-center gap-4 justify-between"
        >
          <div id="menu" role="img" tabIndex={-1} className="cursor-pointer">
            <MenuIcon></MenuIcon>
          </div>
          <div id="brand-logo" className="cursor-pointer">
            <Image
              quality={60}
              priority={true}
              src={brandLogoPizza}
              alt="Brand Logo"
              className="h-12 w-12"
            ></Image>
          </div>
          <div id="delivery-location">
            <div className="flex items-center flex-col h-20 justify-center cursor-pointer">
              <div className="flex items-center gap-1">
                <LocationIcon></LocationIcon>
                <p className="font-light text-xs">Delivering to</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="font-medium text-sm max-lg:text-ellipsis">
                  Change Address
                </p>
                <Image src={downArrow} alt="arrow" className="h-4 w-4"></Image>
              </div>
            </div>
          </div>
        </div>
        <div
          id="right-header"
          className="flex items-center gap-4 justify-between"
        >
          <div id="search" className="flex items-center gap-1 cursor-pointer">
            <SearchIcon></SearchIcon>
            <p className="font-medium text-base max-md::text-ellipsis">
              Search
            </p>
          </div>
          <div
            id="login"
            className="flex items-center gap-1 h-10 cursor-pointer"
          >
            <LoginIcon></LoginIcon>
            <p className="font-medium text-base max-md:text-ellipsis">
              {" "}
              Login{" "}
            </p>
          </div>
          <div id="cart" className="flex items-center gap-1 cursor-pointer">
            <CartIcon></CartIcon>
            <p className="font-medium text-base max-md:text-ellipsis"> Cart </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
