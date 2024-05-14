import Image from "next/image";
import MenuCategories from "./MenuCategories";
import Card from "./Card";
import CartSummary from "./CartSummary";
import Sort from "@/resource/sort.svg";

const MenuPanel = () => {
    return (
        <div className="mx-auto min-h-max">
            <div className="grid grid-cols-1 md:grid-cols-[20%,50%,26%] gap-4 mt-4 min-h-max">
                <div className="p-1 hidden md:block h-min top-0 sticky">
                    <MenuCategories></MenuCategories>
                </div>
                <div className="p-3 relative">
                    <div className="z-10 top-0 w-full p-1 border-b box-border sticky bg-white">
                        <div className="flex justify-end items-center">
                            <div className="flex gap-2 items-center">
                                <Image src={Sort} alt="sort"></Image>
                                <p>sort</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1">
                            <h2 className="font-bold text-lg">
                                Recommended
                            </h2>
                            <p className="font-light text-sm"> 22 items</p>
                        </div>
                    </div>
                    <div className="relative md:-top-12 -top-6 min-h-max w-full">
                        <div className=" min-h-max box-border md:pt-8">
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div>
                </div>
                <div className="p-1 top-0 hidden md:block h-min sticky">
                    <CartSummary></CartSummary>
                </div>
            </div>
        </div>


    );
}

export default MenuPanel;