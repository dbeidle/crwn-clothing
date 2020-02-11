import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import { createStructuredSelector} from 'reselect';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.scss';


const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
    <div className="cart-items">
    {cartItems.map(cartItem => 
        (<CartItem key={cartItem.id} item={cartItem} />
    ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    selectCartItems
});

export default connect(mapStateToProps)(CartDropDown);
