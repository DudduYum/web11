import styled from 'styled-components';

export const StyledCartItems = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
`;

export const StyledCartItem = styled.div`
    margin:20px 0;
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding-right: 20px;
    background-color: #f0f0f0;
    box-shadow:  5px 5px 6px rgba(0,0,0,0.5);
    align-items: center;
    > img {
        height: 100px;
    }
    > div {
        display: flex;
        justify-content: space-between;
        width: 120px;
    }
`;

export const StyledTytle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: 25px;
`;

export const StyledPrice = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
`;

export const StyledButton = styled.button`
    background-color: ${(props) => (props.color ? props.color : "white")};
    border: none;
    width: 40px;
    cursor: pointer;
`;



