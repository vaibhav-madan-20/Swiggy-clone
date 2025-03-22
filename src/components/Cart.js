import { useSelector } from "react-redux";
import ItemList from "./ItemList";

import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = ()=> {
        dispatch(clearCart())
    };
    return (
        <>
        <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center font-bold">Cart</h1>
            <button className="border border-black"
                onClick={handleClearCart}>
                Clear cart
            </button>
        {cartItems.length === 0 && <h1>Cart is empty. Add items to your cart!</h1>}
        </div>
        {cartItems.length > 0 && <div className="w-3/5 mx-auto my-4 bg-stone-100 text-justify rounded-lg border border-gray-300 shadow-lg p-4">
            <ItemList items={cartItems} />
        </div>}
        </>
    )
}

export default Cart;