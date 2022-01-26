import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
//withRouter
import withRouter from "../../utils/function.until";
//redux
import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

//selector
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ router }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch(); 
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        type="button"
        onClick={() => {
          router.navigate("/checkout");
          dispatch(toggleCartHidden()); // hidden cartdropdown menu with dispatch redux
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

//redux

export default withRouter(CartDropdown);
