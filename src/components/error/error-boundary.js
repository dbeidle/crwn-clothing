import React, { Component } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-styles";

class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageText>
            So Sorry, It looks like what we have here is what we call a
            non-repeating phantasm, or a class-5 free roaming vapor. We'll see
            if we can get this fixed up for you as soon as possible!
          </ErrorImageText>
          <ErrorImageContainer imageUrl="/images/error.jpg" />
          <ErrorImageText>Please try again later.</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
