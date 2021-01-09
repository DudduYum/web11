import styled from "styled-components";
import { Button } from "antd";

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CartButtons = styled.div`
  font-size: 25px;
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  height: auto;
  border-radius: 10px;
  font-size: 20px;
`;