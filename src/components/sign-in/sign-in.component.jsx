import React, { useState } from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//saga
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredential;
  const handleSubmit = async (event) => {
    event.preventDefault();


    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredential({ ...userCredential, [name]: value });
  };


  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={email}
          name="email"
          label="Email"
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          value={password}
          name="password"
          label="Password"
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn={true}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

//saga
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
