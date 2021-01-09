import styled from 'styled-components';
import {Card} from "antd";


export const TextStyle = styled.div`
    padding-top: 15px;
    color: black;
    font-size: 16px;
    padding-right: 20px;
    display: flex;
    justify-content: space-around;
    width:70%;
    h1 {
        padding-top:250px;
        padding-right: 10px;
        font-size: 35px;
        color: black;
    }`

export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    align-items: center;
`;


export const StyledEvents = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-bottom: 30px;
    width: 90%;

`;

export const StyledCardComponents = styled.div`
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const StyledCard = styled(Card)`
width: 240px;
height: 300px;
margin: 0 22px 20px 22px;
`;