import {CartActionType} from './cart.type';

export const toggleCartHidden = () => ({
    type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item
});

export const removeItemToCart = item => ({
    type: CartActionType.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart =  item => ({
    type: CartActionType.CLEAR_ITEM_FROM_CART,
    payload: item
});

// clear all cart items

export const clearAllItemCart = () => ({
    type: CartActionType.CLEAR_ALL_ITEM_CART
});