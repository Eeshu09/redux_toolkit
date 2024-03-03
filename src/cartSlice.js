 
 import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
};
 
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { 
        addTocart:(state,action)=>{ 
            const existingItem = state.cart.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
        },
        remTocart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.cart = state.cart.filter(item => item.id !== action.payload);
                    state.totalQuantity -= 1;
                    state.totalPrice -=existingItem.price;
                    
                } else {
                    existingItem.quantity -= 1;
                    state.totalQuantity -= 1;
                    state.totalPrice -= existingItem.price;
                }

                
            }
        },
        remove: (state, action) => {
            const removedItem = state.cart.find(item => item.id === action.payload);
        
            if (removedItem) {
                state.cart = state.cart.filter(item => item.id !== action.payload);
                state.totalQuantity -= removedItem.quantity;
                state.totalPrice -= removedItem.price * removedItem.quantity;
            }
        },
        
        
    }
});
export const {addTocart,remTocart,remove}=cartSlice.actions;
export default cartSlice.reducer;
