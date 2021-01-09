import styled from "styled-components";
import { Button } from "antd";

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

`;

export const StyledMainInfo = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;

  /* border: 1px solid black; */
`;

export const StyledBuyInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    font-size: 20px;
    font-weight: 700;
    margin: 40px;
    height: 100%;
  }

`;

export const StyledButton = styled(Button)`
  margin-left:130px;
  margin-top: 15px;
  height: auto;
  border-radius: 10px;
  font-size: 20px;
  background-color: green;
  border-color: green;
`;


export const EventImg = styled.img`
  display: flex;
  align-items: center;

  margin-right: 40px;

  height: 300px;

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding-left: 10px;
  height: 300px;
  width: 500px;

  font-size: 18px;

  > div {
    display: flex;
    justify-content: space-around;
    width: 110%;
  }

`;

export const InfoText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  > div {
    font-weight: 700;
  }

`;

