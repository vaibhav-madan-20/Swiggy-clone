import { createSlice } from "@reduxjs/toolkit";

const menusSlice = createSlice({
    name: "menus",
    initialState: {
        menus: {}
    },
    reducers: {
        addMenu: (state, action)=> {
            const {resId, resMenu} = action.payload;
            state.menus[resId] = resMenu;
        },
        updateCart: (state, action)=> {

        }
    }
})

export const { addMenu, updateCart } = menusSlice.actions;
export default menusSlice.reducer;