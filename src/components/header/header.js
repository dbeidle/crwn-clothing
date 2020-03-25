import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { ReactComponent as Logo } from "../../assets/crown.svg"; // Importing .svg logo as a react component
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header-styles";
import { signOutStart } from "../../redux/user/user-actions";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      {" "}
      {/*Creates an <a href> link for anything in between it's boundaries */}
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {/* The below code checks if the user is logged in and if so changes the header links for signin/signout respectively. */}
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>

    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
