import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

import vegImage from "../utils/assets/veg.png";
import nonvegImage from "../utils/assets/nonveg.png";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = item => {
        dispatch(addItem(item));
    }
    return (
        <div className="flex flex-col">
            {items.map(i => (
                <div
                    className="p-4 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 to-white"
                    key={i.card.info.id} data-testid="foodItems"
                >
                    <div className="flex justify-between items-center">
                        {/* Left Side - Item Info */}
                        <div>
                            <img className="w-4" src={i.card.info.isVeg ? vegImage : nonvegImage} />
                            <h3 className="w-36 max-w-36 md:text-lg font-semibold text-gray-800">{i.card.info.name}</h3>
                            <p className="md:text-lg text-indigo-600">₹{i.card.info.defaultPrice ? i.card.info.defaultPrice / 100 : i.card.info.price / 100}</p>
                            <p className="hidden lg:inline text-sm text-gray-600 text-justify">{i.card.info.description}</p>
                        </div>

                        {/* Right Side - Image & Button */}
                        <div className="flex flex-col items-center justify-center relative mt-4 sm:mt-0">
                            <button
                                className="w-20 absolute bottom-2 bg-indigo-600 text-white py-1 px-2 md:py-2 md:px-4 rounded-lg shadow-md"
                                onClick={() => handleAddItem(i)}
                                data-testid="add"
                            >
                                Add+
                            </button>
                            
                                <img
                                    src={CDN_URL + i.card.info.imageId}
                                    className="w-28 h-32 md:w-40 md:h-48 md:min-w-40 md:min-h-48 object-cover rounded-3xl border-2 border-gray-200 shadow-md"
                                    alt="Food item"
                                />
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;