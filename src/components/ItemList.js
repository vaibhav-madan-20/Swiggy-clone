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
        <div className="flex flex-col space-y-6">
            {items.map(i => (
                <div
                    className="p-4 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 to-white transition-transform duration-300 ease-in-out"
                    key={i.card.info.id} data-testid="foodItems"
                >
                    <div className="flex justify-between items-center">
                        {/* Left Side - Item Info */}
                        <div className="flex-1 max-w-[500px] space-y-3">
                            <img className="w-4"src={i.card.info.isVeg ? vegImage : nonvegImage} alt="" />
                            <h3 className="text-lg font-semibold text-gray-800">{i.card.info.name}</h3>
                            <p className="text-lg text-indigo-600">₹{i.card.info.defaultPrice ? i.card.info.defaultPrice / 100 : i.card.info.price / 100}</p>
                            <p className="text-sm text-gray-600">{i.card.info.description}</p>
                        </div>

                        {/* Right Side - Image & Button */}
                        <div className="flex flex-col items-center justify-center relative">
                            <button
                                className="absolute bottom-2 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md active:scale-90 transition-transform duration-150"
                                onClick={() => handleAddItem(i)}
                                data-testid="add"
                            >
                                Add+
                            </button>
                            {i.card.info.imageId && (
                                <img
                                    src={CDN_URL + i.card.info.imageId}
                                    className="w-40 h-40 object-cover rounded-md border-2 border-gray-200 shadow-md"
                                    alt="Food item"
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;