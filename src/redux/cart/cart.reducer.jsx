import { CartActionType } from "./cart.type";
import { addItemToCartWithCheck, removeItemToCartWithCheck } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartWithCheck(state.cartItems, action.payload),
      };
    case CartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemToCartWithCheck(state.cartItems, action.payload),
      };
    case CartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionType.CLEAR_ALL_ITEM_CART:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state;
  }
};

export default CartReducer;
