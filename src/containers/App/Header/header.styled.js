import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const HeaderStyle = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
table-layout: fixed;
border-spacing: 30px;
> div {
    display: flex;
}
p {
    font-size: 22px;
    margin-top: 20px;
    font-weight: bold;
}
span {
    display: flex;
}
`;

export const IconW = styled.div`  
  display: flex;
  color: orange;
  margin-top: 20px;
  padding-left: 20px;
> span {
    margin: 5 15px;
}`;

export const Icons = styled(Icon)`
font-size: 30px;
color: orange;
`;

export const Linked  = styled.div`
.selected {
    :after {
        font-size: 20px;
    }
    ul {
    list-style-type:none;
    display: flex;
    align-items: center;
    margin: 0px;
}}
li {
    display: inline-block;
    position: relative;
    font-weight: bold;
    margin: 0px 15px;
    font-size: 26px;
    font-weight: 100;
    a {
        -webkit-text-stroke: 0.25px black;
        color: orange;
        text-decoration: none;
    }
}`;