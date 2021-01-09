import React from "react";
import {
  StyledSuccess,
  StyledSuccessText,
  StyledSuccessButton,
  StyledSuccessNavLink
} from "./success.style";
import { NavLink } from "react-router-dom";

import SuccessPNG from "../../Icons/Success.png";

const Success = () => {
  return (
    <StyledSuccess>
      <img src={SuccessPNG} alt="adsa" />
      <StyledSuccessText>Lmao! You done it!</StyledSuccessText>
      <StyledSuccessNavLink exact to="/Catalog">
        <StyledSuccessButton>Back to catalog</StyledSuccessButton>
      </StyledSuccessNavLink>
    </StyledSuccess>
  );
};

export default Success;