import React from "react";

import Spinner from "./spinner2";

// const WithSpinner = WrappedComponent => {
//   const Spinner = ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//       <SpinnerOverlay>
//         <SpinnerContainer />
//       </SpinnerOverlay>
//     ) : (
//       <WrappedComponent {...otherProps} />
//     );
//   };
//   return Spinner;
// };

// The above could also be written like this below for brevity.

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
