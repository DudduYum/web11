import styled from "styled-components";

export const StyledItem = styled.div`
  background-color: #c7c7c7;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: ${(props) => (props.width ? props.width + "px" : "300px")};
  height: ${(props) => (props.height ? props.height + "px" : "350px")};
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
   
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`;
export const ItemImg = styled.img`
  display: flex;
  width: 100%;
  border-radius: 10px;

`;
export const ItemTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  
  font-weight: 500;
`;

export const ItemContent = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  height: 100px;
  background-color: #e2e2e2;
`;

export const ItemCartButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  padding: 0;
  margin: 0;
  background-color: green;
  width: 100%;
  border-radius: 10px 0 10px 10px;
  border: 0px solid green; 
  outline: none;

  &:hover {
    background-color: red;  

    transition-duration: 0.5s;

  }
  &:focus {
    border-radius: 0 0 10px 10px; 
    background-color: red;
  }
`;
