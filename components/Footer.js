import { InstagramIcon } from "@/utility/SvgIcons";

const Footer = () => {
    return (
        <div className="bg-neutral-200 py-16 px-9">
            {/* <div className="grid grid-cols-3 gap"></div> */}
            <div className="flex gap-x-1/10">
                {/* more section */}
                <div className="min-w-fit">
                    <p id="more" className=" text-base font-semibold mb-2">More</p>
                    <ul className=" list-none">
                        <a href="/about-us" className="hover:underline"><p className="mt-2 text-sm leading-5">About Us</p></a>
                        <a href="/privacy-policy" className="hover:underline"><p className="mt-2 text-sm leading-5">Privacy Policy</p></a>
                        <a href="/disclaimers" className="hover:underline"> <p className="mt-2 text-sm leading-5">Disclaimers</p></a>
                        <a href="delivery-order-policies" className="hover:underline"> <p className="mt-2 text-sm leading-5">Delivery Order Policies</p></a>
                    </ul>
                </div>
                <div className="min-w-fit">
                    <p id="more" className=" text-base font-semibold mb-2">Contact Us</p>
                    <ul className=" list-none">
                        <a href="mailto:zomatosupport@gmail.com" className="hover:underline"><p className="mt-2 text-sm leading-5">zomatosupport@gmail.com</p></a>
                    </ul>
                </div>
                <div className="min-w-fit">
                    <p id="more" className=" text-base font-semibold mb-2">Follow Us</p>
                    <div className="flex items-center gap-2">
                        <a href="www.facebook.com" target="_blank" className=" bg-slate-100 rounded-3xl border-solid px-2 pt-2 pb-1.5">
                            <img class="social-icon internal-icon" src="data:image/svg+xml;utf8,%0A%20%20%20%20%20%20%20%20%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M10.152%2021.6H13.668V12.84H16.608L17.052%209.43199H13.668V7.24799C13.668%206.26399%2013.944%205.59199%2015.36%205.59199H17.172V2.53199C16.86%202.49599%2015.792%202.39999%2014.544%202.39999C11.928%202.39999%2010.152%203.99599%2010.152%206.91199V9.43199H7.19995V12.84H10.152V21.6Z%22%20fill%3D%22black%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsvg%3E%0A%20%20%20%20%20%20%20%20" width="24" height="24" />
                        </a>
                        <a href="www.facebook.com" target="_blank" className=" bg-slate-100 rounded-3xl border-solid px-2 pt-2 pb-1.5">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;