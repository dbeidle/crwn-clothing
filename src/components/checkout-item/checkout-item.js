import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart-actions";

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutImage,
  NameQuantityPrice,
  Arrow,
  QuantityValue,
  RemoveButton
} from "./checkout-item-styles";

const CheckOutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage alt="item" src={imageUrl} />
      </CheckoutImageContainer>
      <NameQuantityPrice>{name}</NameQuantityPrice>
      <NameQuantityPrice>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </NameQuantityPrice>
      <NameQuantityPrice>{price}</NameQuantityPrice>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
