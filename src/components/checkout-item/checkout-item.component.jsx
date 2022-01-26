import React from "react";
import "./checkout-item.style.scss";

//redux
import {
  clearItemFromCart,
  addItemToCart,
  removeItemToCart,
} from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItemToCart,
  removeItemToCart,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt="item" />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <div
        className="arrow"
        onClick={() => {
          removeItemToCart(cartItem);
        }}
      >
        &#10094;
      </div>
      <span className="value">{cartItem.quantity}</span>
      <div
        className="arrow"
        onClick={() => {
          addItemToCart(cartItem);
        }}
      >
        &#10095;
      </div>
    </span>
    <span className="price">{cartItem.price}</span>
    <div
      className="remove-button"
      onClick={() => {
        clearItem(cartItem);
      }}
    >
      &#10005;
    </div>
  </div>
);

//redux
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemToCart: (item) => dispatch(removeItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
