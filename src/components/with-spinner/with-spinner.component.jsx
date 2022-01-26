import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.style";
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({isLoading, ...ortherProps}) => {
    console.error('MMMMMMMMMMMMMMMMMMMMMMMMMMMM');
    console.error(ortherProps);
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...ortherProps}/>
    );
  };
  return Spinner;
};

export default WithSpinner;
