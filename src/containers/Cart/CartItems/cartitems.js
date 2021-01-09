import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledCartItems, StyledCartItem, StyledPrice, StyledTytle, StyledButton } from "./cartitems.styled";
import { useSelector } from "react-redux";
import Event_0 from "../../../Icons/adidas2.jpg";
import {
  selectCart,
  incrementQuantity,
  decrementQuantity,
} from "../../../Redux/reducers";
export const CartItems = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const n = cart.reduce((count, current) => (count += 1), 0);
  const countArray = cart.map((item) => item.quantity);
  const [counter, setCounter] = useState(countArray);

  return (
    <StyledCartItems>
      {cart.map((item) => {
        const i = cart.indexOf(item);

        const decrementCount = () => {
          dispatch(decrementQuantity(item));
        };
        const incrementCount = () => {
          dispatch(incrementQuantity(item));
        };

        return (
          <StyledCartItem>
            <img src={Event_0} />
            <StyledTytle>
            {item.element.name}
            </StyledTytle>
            <div>
              <StyledButton color="rgb(255, 40, 40, 0.7)" onClick={decrementCount}>-1</StyledButton>
              {item.quantity}
              <StyledButton color="rgb(36, 255, 135, 0.7)" onClick={incrementCount}>+1</StyledButton>
            </div>
            <StyledPrice>
            ₴ {item.element.price_in_uah * item.quantity}
            </StyledPrice>
          </StyledCartItem>
        );
      })}
    </StyledCartItems>
  );
};

export default CartItems;