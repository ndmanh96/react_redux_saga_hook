import React from 'react';
import './cart-icon.style.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

//redux
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

//selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

//redux
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    //selector
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);