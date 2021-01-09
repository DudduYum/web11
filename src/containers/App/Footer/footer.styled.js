import styled from 'styled-components';
import Icon from '@ant-design/icons';

export const MainFooter = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
background-color: black;
align-items: left;
margin-top: 50px;
p{
    color: white;
    margin-left: 10px;
    font-size: 15px;
    font-family :'Cantarell';
    padding-bottom: 5px;
    margin-top: 10px;
}
`;

export const Icons = styled(Icon)`
font-size: 30px;
padding-left: 30px;
color: white;
`

export const Place = styled.div`
display: flex;
justify-content: start;
flex-direction: row;
margin-top: 55px;
padding-top: 25px;
`

export const IconsSoc = styled.div`
display: flex;
justify-content: start;
flex-direction: row;
padding-right: 15px;
padding-top:10px;
`

export const IconLogo = styled(Icon)`
font-size: 20px;
color: orange;
margin-top:10px;
margin-left:5px;
`

export const Logo = styled.div`
padding-top:35px;
display: flex;
flex-direction: row;
p{
    font-size: 20px;
    font-family :'Cantarell';
}
`