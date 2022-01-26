import React, { useState } from "react";
import "./sign-up.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//sign upsaga
import { signUpStart } from "../../redux/user/user.action";
import { connect } from "react-redux";
const SignUp = ({ signUpStart }) => {
  const [userCredential, setUserCredential] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredential;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          required
          onChange={handleChange}
        ></FormInput>

        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          required
          onChange={handleChange}
        ></FormInput>

        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          required
          onChange={handleChange}
        ></FormInput>

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
          onChange={handleChange}
        ></FormInput>

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredential) => dispatch(signUpStart(userCredential)),
});

export default connect(null, mapDispatchToProps)(SignUp);
