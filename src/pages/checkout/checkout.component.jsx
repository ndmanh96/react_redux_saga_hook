import React from "react";
import "./checkout.style.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

//redux
import { connect } from "react-redux";


//selector
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

//stripeKey
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
    ))}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <StripeCheckoutButton price={total}></StripeCheckoutButton>
  </div>
);

//redux
const mapStateToProps = createStructuredSelector({
  //selector
  cartItems: selectCartItems,
  total: selectCartTotal,
});


export default connect(mapStateToProps)(CheckoutPage);
