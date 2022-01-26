import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";

//firebase
import { auth } from "../../firebase/firebase.utils";

//redux
import {connect} from 'react-redux';

//selector
import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";

//Cart
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//sign out sagaMiddleware
import { signOutStart } from "../../redux/user/user.action";


//styled
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.style';
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>

      {
        currentUser ? 
        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
        : 
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown/>
    }
    
  </HeaderContainer>
);

//redux
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
