import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        clearCart: (state)=>{
            state.items.length = 0
        }
    }
})
export const {addItem, clearCart}=cartSlice.actions;
export default cartSlice.reducer;

/* No, this is not wrong because createSlice from Redux Toolkit (RTK) uses Immer internally. This means you can write "mutative" code, but Immer ensures that state updates remain immutable under the hood. */