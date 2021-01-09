import React from "react";
import {StyledItem, ItemImg} from "./item.styled.js";
import Snek from "../../../../Icons/adidas.jpg";

export const Item = (props) => {
    return (
        <StyledItem width={props.width} height={props.height}>
            <ItemImg src={Snek}/>
            {props.header}
        </StyledItem>
    );
}

export default Item;