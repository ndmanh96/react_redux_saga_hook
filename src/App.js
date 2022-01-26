import React, { useEffect } from "react";
import { Homepage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import CheckoutPage from "./pages/checkout/checkout.component";

//firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

//redux
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.action";

//selectors
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

//hook
import {useSelector, useDispatch} from 'react-redux';

const App = () => {
  


  const currentUser = useSelector(selectCurrentUser);
  const isHidden = useSelector((state)=>state.cart.hidden)
  console.error(currentUser);
  console.error(isHidden);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop/*" element={<ShopPage />} />
        <Route exact path="/signin" element={<SignInAndSignUp />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

export default App;
