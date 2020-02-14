import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import {ReactComponent as Logo} from '../../assets/crown.svg'; // Importing .svg logo as a react component
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import './header.scss';

const Header = ( {currentUser, hidden} ) => (
 <div className="header">
     <Link className="logo-container" to="/"> {/*Creates an <a href> link for anything in between it's boundaries */}
        <Logo className="logo" />
     </Link>
     <div className="options">
         <Link className="option" to="/shop">
             SHOP
         </Link>
         <Link className="option" to="/shop">
             CONTACT
         </Link>
         {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
     </div>
      {hidden ? null : <CartDropDown />}
 </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);