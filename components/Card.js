import Image from "next/image";
import PizzaItem from "../resource/pizza_item.jpg";
import { DietIndicator, FavouriteIndicator } from "./utility/SvgIcons";

const Card = () => {
  return (
    <div className="bg-white shadow-sm">
      <div
        id="card"
        className="flex justify-between px-5 cursor-pointer border-b border-gray-400 rounded-sm py-12"
      >
        <div id="card_left" className="flex-col">
          <div className="flex justify-start mt-1">
            <DietIndicator />
          </div>

          <p className="text-base font-bold">Cheese Sauce Pizza</p>
          <div
            id="card_food_price"
            className="flex text-grey-700 font-mono justify-start"
          >
            ₹199.0
          </div>
          <div
            id="card_food_description"
            className="h-8 text-sm my-2 text-grey-900 font-light font-sans"
          >
            <p>
              Cheese Sauce Penne Pasta | Onion | Capsicum | Mushroom | Black
              Olives
            </p>
          </div>
        </div>
        <div
          id="card_right"
          className=" flex flex-col justify-center items-center align-middle relative"
        >
          <Image
            quality={60}
            priority={true}
            src={PizzaItem}
            alt="pizza 7'"
            className="w-44 h-32 rounded-md"
          />
          <div
            id="card_favourite_indicator"
            className="absolute top-2 right-2 bg-white px-0.5 py-0.5 rounded-sm"
          >
            <FavouriteIndicator />
          </div>
          <div
            id="card_addcart_button"
            className="flex flex-col justify-center -mt-5 w-3/4 items-center "
          >
            <button className="w-full h-9 border-2 border-gray-300 bg-white rounded">
              <p className="font-semibold text-red-400">Add</p>
            </button>
            <p className="font-light text-gray-500 text-sm"> Customisable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
