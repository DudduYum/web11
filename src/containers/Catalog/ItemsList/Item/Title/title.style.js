import styled from "styled-components";

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => (props.width ? props.width + "px" : "300px")};
  height: ${(props) => (props.height ? props.height + "px" : "350px")};
  margin-top: 20px;

  border-radius: 10px;
  border: 1px solid black;
`;
export const ItemImg = styled.img`
  display: flex;
  width: 100%;
  border-radius: 10px;
`;
