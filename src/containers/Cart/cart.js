import React from "react";
import { StyledCart, CartButtons, StyledButton } from "./cart.style";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItems from "./CartItems/cartitems";
import {
  selectCart,
} from "../../Redux/reducers";

const Cart = () => {

  const cart = useSelector(selectCart);
  console.log(cart);
  const totalPrice = cart.reduce((sum, current)=>{
  
    return sum += current.element.price_in_uah * current.quantity;
  },0);
  console.log(totalPrice);

  return (
    <StyledCart>
      <h1>Shopping Cart</h1>

      <CartItems />
      <CartButtons>
        <NavLink exact to="/Catalog">
          <StyledButton>Back to catalog</StyledButton>
        </NavLink>
        Total price: ₴ {totalPrice}
        <NavLink exact to="/CartForm">
        <StyledButton type="primary">Continue</StyledButton>
        </NavLink>
      </CartButtons>
    </StyledCart>
  );
};

export default Cart;