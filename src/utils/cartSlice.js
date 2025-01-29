import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
            state.items.push(action.payload);
            // const items = localStorage.getItem('items');
            // if (!items) {
            //     localStorage.setItem('items', JSON.stringify([action.payload,]));
            // }
            // else{
            //     localStorage.setItem('items', JSON.stringify([...(JSON.parse(items)), action.payload]))
            // }
        },
        remoteItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0
        },
        updateCart: ()=> {

        }
    }
})
export const {addItem, remoteItem, clearCart, updateCart}=cartSlice.actions;
export default cartSlice.reducer;
