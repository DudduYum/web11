import styled from "styled-components";
import { Button } from "antd";
import Filters from "../Filters/filters";

export const StyledFilter = styled.div`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;

  > div {
    margin-left: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 100%;
    width: 60%;
  }
  > div > select{
    border-color: orange;
    border-radius: 20px;
  }
`;

export const StyledButton = styled(Button)`
  width: 200px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: black;
  border-color:black;
`;
