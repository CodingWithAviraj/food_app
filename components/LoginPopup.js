import EverydayOffer from "@/resource/everydayOffer.jpg";
import IndiaIcon from "@/resource/IndiaIcon.webp";
import GoogleIcon from "@/resource/GoogleIcon.png";
import FacebookIcon from "@/resource/FacebookIcon.png";
import Image from "next/image";
import { Imprima } from "next/font/google";

const LoginPopup = () => {
    return (
        <div id="dialog" className="fixed top-0 left-0 z-20 w-dvw h-dvh flex justify-center items-center">
            <div id="dialog_bg" className="fixed top-0 left-0 w-dvw h-dvh opacity-90 bg-gray-800">
            </div>
            <div id="dialog_grid" className="absolute max-w-full max-h-full flex justify-center items-stretch bg-white">
                <div id="left_grid" className="">
                    <div>
                        <Image alt="loginImage" src={EverydayOffer} className=" max-w-[220px] h-[260px] object-cover"></Image>
                    </div>
                </div>
                <div id="right_grid" className="flex justify-center items-center p-4">
                    <div id="login_form" className="">
                        <div id="login_header" className="mb-2">
                            <h1 className="font-semibold text-lg">Login/Signup</h1>
                            <p className="font-light text-xs">Login to your account to place orders</p>
                        </div>
                        <div id="login_input_wrapper" className="mb-2">
                            <p className="font-light text-xs mb-2">Phone Number</p>
                            <div id="input_box_wrapper" className="flex gap-2 items-center h-6 border border-gray-500 px-1">
                                <div className="flex justify-center items-center gap-1 border-r border-gray-500">
                                    <Image alt="countryFlag" src={IndiaIcon} className="w-4 h-3"></Image>
                                    <p className="text-sm font-light pr-1">+91</p>
                                </div>
                                <input
                                    id="phone"
                                    type="tel"
                                    className={`border-none text-sm font-light outline-none rounded-md`}
                                    placeholder="Enter your phone number"
                                    // value={phoneNumber}
                                    // onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div id="login_button">
                            <button className="w-full h-6 border bg-red-700 flex justify-center items-center" >
                            <p className="text-xs font-light text-white">Get OTP</p>
                            </button>
                        </div>
                        <div id="login_terms" className="mt-2">
                          <p className="text-xs font-light"> By Clicking on get OTP, I accept the T&C </p>
                        </div>
                        <div id="login_social" className="flex justify-center items-center gap-2 mt-3 m-auto">
                           <Image alt="google" src={GoogleIcon} className="w-6 h-6"></Image>
                           <Image alt="facebook" src={FacebookIcon} className="w-5 h-5"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPopup;
