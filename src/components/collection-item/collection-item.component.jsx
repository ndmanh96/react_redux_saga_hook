import React from "react";
import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";

//redux
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItemToCart }) => {
  const {name, price, imageUrl} = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>Add to cart</CustomButton>
    </div>
  );
};

//redux
const mapStateToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapStateToProps)(CollectionItem);
