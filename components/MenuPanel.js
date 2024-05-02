import Image from "next/image";
import MenuCategories from "./MenuCategories";
import Card from "./Card";
import CartSummary from "./CartSummary";
import Sort from "@/resource/sort.svg";

const MenuPanel = () => {
    return (
        <div className="max-w-screen-xl mx-auto max-h-lvh">
            <div className="grid grid-cols-1 max-h-lvh md:grid-cols-[20%,50%,27%] gap-6 mt-4">
                <div className="p-1 hidden md:block h-min top-0 sticky">
                    <MenuCategories></MenuCategories>
                </div>
                <div  className="p-3 max-h-lvh relative">
                    <div  className="z-10 w-full sticky p-1 border-b border-gray-300 box-border">
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
                    </div>
                    <div className="md:absolute top-0 min-h-max w-full overflow-hidden">
                        <div className=" min-h-max box-border md:pt-8">
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div>
                </div>
                <div className="p-1 hidden md:block h-min">
                    <CartSummary></CartSummary>
                </div>
            </div>
        </div>


    );
}

export default MenuPanel;