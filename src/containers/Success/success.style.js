import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Button } from "antd";

export const StyledSuccess = styled.div`
  margin:0 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  > img {
    width: 20%;
  }
`;

export const StyledSuccessText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 20px;
  font-weight: 500;
`;

export const StyledSuccessButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  height: 100%;
`;

export const StyledSuccessNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 30%;
  height: 40px;
`;