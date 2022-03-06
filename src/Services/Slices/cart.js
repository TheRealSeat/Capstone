import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartEvents: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cart = createSlice({
    name: 'cart',
    initialState ,
    reducers: {
        addToCart(state, action) {
            state.cartEvents.push(action.payload);
            state.cartTotalQuantity += 1;
            state.cartTotalAmount += action.payload.event_pricesFrom;
        },
        removeFromCart(state, action) {
            state.cartTotalAmount -= state.cartEvents[action.payload].event_pricesFrom;
            state.cartEvents.splice(action.payload, 1)
            state.cartTotalQuantity -= 1;
        }
    }
})

export const { addToCart, removeFromCart } = cart.actions

export default cart.reducer