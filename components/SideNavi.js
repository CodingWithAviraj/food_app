import { SideNaviMenu, SideNaviCoupons, SideNaviRedirectIcon, SideNaviRightIndicator } from "../utility/SvgIcons";

const SideNavi = () => {
    return (
        <div id="side_navi">
            <div className="fixed top-0 w-dvw h-dvh opacity-90 z-[1000] bg-gray-800">
            </div>
            <div id="drawer_card" className="fixed top-0 min-w-56 h-dvh max-w-64 z-[1100] bg-white">
                <div id="nav_drawer" className="flex flex-col">
                    <div id="user_card" className="flex p-4 gap-3 items-center border-b-[1px] border-gray-600 mb-2">
                        <div id="user_image" className="w-12 h-12 bg-red-800 rounded-full flex justify-center items-center">
                            <h1 className="text-white text-lg" >G</h1>
                        </div>
                        <div id="user_details" className="flex flex-col justify-center items-center gap-1">
                            <h1 className="text-lg font-bold"> Guest </h1>
                            <p className="text-sm font-semibold cursor-pointer hover:underline"> Login </p>
                        </div>
                    </div>
                    <div id="nav_menu" className="flex flex-col px-4 py-1 gap-2">
                        <div id="menu" className="flex justify-between items-center cursor-pointer h-10">
                            <div className="flex justify-center gap-2 items-center">
                                <SideNaviMenu></SideNaviMenu>
                                <p className="text-sm font-semibold">Menu</p>
                            </div>
                            <div>
                                <SideNaviRightIndicator></SideNaviRightIndicator>
                            </div>
                        </div>
                        <div id="coupons" className="flex justify-between items-center cursor-pointer h-10">
                            <div className="flex justify-center gap-2 items-center">
                                <SideNaviCoupons></SideNaviCoupons>
                                <p className="text-sm font-semibold">Coupons</p>
                            </div>
                            <div>
                                <SideNaviRightIndicator></SideNaviRightIndicator>
                            </div>
                        </div>
                        <div id="aboutus" className="flex justify-between items-center cursor-pointer h-10">
                            <div className="flex justify-center gap-2 items-center">
                                <SideNaviRedirectIcon></SideNaviRedirectIcon>
                                <p className="text-sm font-semibold">About Us</p>
                            </div>
                            <div  >
                                <SideNaviRightIndicator></SideNaviRightIndicator>
                            </div>
                        </div>
                        <div id="privacy_policy" className="flex justify-between items-center cursor-pointer h-10">
                            <div className="flex justify-center gap-2 items-center">
                                <SideNaviRedirectIcon></SideNaviRedirectIcon>
                                <p className="text-sm font-semibold">Privacy Policy</p>
                            </div>
                            <div  >
                                <SideNaviRightIndicator></SideNaviRightIndicator>
                            </div>
                        </div>
                        <div id="disclaimers" className="flex justify-between items-center cursor-pointer h-10">
                            <div className="flex justify-center gap-2 items-center">
                                <SideNaviRedirectIcon></SideNaviRedirectIcon>
                                <p className="text-sm font-semibold">Disclaimers</p>
                            </div>
                            <div >
                                <SideNaviRightIndicator></SideNaviRightIndicator>
                            </div>
                        </div>
                        <div id="delivery_order_policy" className="flex justify-between items-center cursor-pointer h-10">
                            <div className="flex justify-center gap-2 items-center">
                                <SideNaviRedirectIcon></SideNaviRedirectIcon>
                                <p className="text-sm font-semibold">Delivery Order Policy</p>
                            </div>
                            <div >
                                <SideNaviRightIndicator></SideNaviRightIndicator>
                            </div>
                        </div>
                        <div id="contact_us" className="flex justify-between items-center cursor-pointer h-10">
                            <div className="flex justify-center gap-2 items-center">
                                <SideNaviRedirectIcon></SideNaviRedirectIcon>
                                <p className="text-sm font-semibold">Contact Us</p>
                            </div>
                            <div >
                                <SideNaviRightIndicator></SideNaviRightIndicator>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNavi;