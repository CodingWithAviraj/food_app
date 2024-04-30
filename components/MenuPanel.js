import Image from "next/image";
import MenuCategories from "./MenuCategories";
import Card from "./Card";
import CartSummary from "./CartSummary";
import Sort from "@/resource/sort.svg";

const MenuPanel = () => {
    return (
        <div className="max-w-screen-xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[20%,50%,28%] gap-6 mt-4">
                <div className="p-1 hidden lg:block h-min">
                    <MenuCategories></MenuCategories>
                </div>
                <div className="p-1 relative">
                    <div className="flex justify-end items-center">
                       <div className="flex gap-2 items-center">
                        <Image src={Sort} alt="sort"></Image>
                          <p> sort</p>
                       </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h2 className="font-bold text-lg">
                            Recommended
                        </h2>
                        <p className="font-light text-sm"> 22 items</p>
                    </div>
                    <div className="overflow-y-auto h-full absolute"  style={{ scrollbarWidth: "1px" }}>
                         <Card></Card>
                         <Card></Card>
                         <Card></Card>
                    </div>
                </div>
                <div className="p-1 hidden lg:block h-min">
                    <CartSummary></CartSummary>
                </div>
            </div>
        </div>


    );
}

export default MenuPanel;