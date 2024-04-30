const MenuCategories = () =>{
    return(
        <div className="h-min ml-2">
            <p className="font-bold text-base pt-2 pb-2"> Categories</p>
            <div className="flex flex-col">
                <div className="bg-red-100 p-1 border-r border-red-700 mb-1 cursor-pointer">
                <p className="font-semibold text-base">Recommended</p>
                </div>
                <div className="p-1 mb-1 cursor-pointer">
                  <p className="font-light text-sm">Medium 10" Pizzas</p>
                </div>
                <div className="p-1 mb-1 cursor-pointer">
                  <p className="font-light text-sm">Regular 7" Pizzas</p>
                </div>
                <div className="p-1 mb-1 cursor-pointer">
                  <p className="font-light text-sm">Large 13" Pizzas</p>
                </div>
                <div className="p-1 mb-1 cursor-pointer">
                  <p className="font-light text-sm">Meals and Combos</p>
                </div>
                <div className="p-1 mb-1 cursor-pointer">
                  <p className="font-light text-sm">Everyday Value offer</p>
                </div>
                <div className="p-1 mb-1 cursor-pointer">
                  <p className="font-light text-sm">Garlic Breads & More</p>
                </div>
                <div className="p-1 mb-1 cursor-pointer">
                  <p className="font-light text-sm">Pasta</p>
                </div>
                <div className="p-1 mb-1 cursor-pointer">
                  <p className="font-light text-sm">Fun Meals Pizzas</p>
                </div>
                <div className="p-1 mb-1 cursor-pointer">
                  <p className="font-light text-sm">Dessert</p>
                </div>
            </div>
            
        </div>
    );
}

export default MenuCategories;