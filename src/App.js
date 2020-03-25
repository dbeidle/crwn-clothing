import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";
import Header from "./components/header/header";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner2";
import ErrorBoundary from "./components/error/error-boundary";
//import HomePage from "./pages/homepage/homepage";
//import ShopPage from "./pages/shop/shop";
//import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
//import CheckoutPage from "./pages/checkout/checkout";
//import ContactPage from "./pages/contact/contact";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const ShopPage = lazy(() => import("./pages/shop/shop"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));
const ContactPage = lazy(() => import("./pages/contact/contact"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            {/*This contains the routing for the different pages and the back-button */}
            <Route exact path="/" component={HomePage} />

            <Route path="/shop" component={ShopPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
            {/* the above replaces this and redirects when user is signed in and removes access 
          to /signin <Route path="/signin" component={SignInAndSignUpPage} /> */}
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
