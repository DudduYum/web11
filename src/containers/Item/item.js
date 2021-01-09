import React, { useEffect, useState } from "react";
import { useParams,NavLink } from "react-router-dom";
import { Spin } from "antd";
import { SpinBlock } from "../App/App.styles";
import Snek from "../../Icons/adidas.jpg";
import { addToCart } from "../../Redux/reducers";
import { useDispatch } from "react-redux";

import {
  StyledItem,
  StyledMainInfo,
  StyledBuyInfo,
  EventImg,
  InfoContainer,
  StyledButton,
} from "./item.style";
import API from "../../API/APIserv";

const Item = () => {
  const { id } = useParams();
  const [datta, setDatta] = useState(undefined);
  const dispatch = useDispatch();
  const load = () => {
    async function getData() {
      let userData = await API.get("/item/" + id);
      setDatta(userData.data);
      return userData.data;
    }
    setTimeout(() => {
      getData();
    }, 0);
  };

  useEffect(load, []);

  const spiner = () => {
    return (
      <SpinBlock>
        <Spin size="large" />
      </SpinBlock>
    );
  };

  const cartCklickAdd = () => {
    dispatch(addToCart({element: datta, quantity: 1}));
  }

  return (
    <StyledItem>
      {datta === undefined ? (
        spiner()
      ) : (
        <React.Fragment>
          <StyledMainInfo>
            <EventImg src={Snek} />
            <InfoContainer>
              <h1>{datta.name}</h1>
            </InfoContainer>
          </StyledMainInfo>
          <StyledBuyInfo>
            <div>Price: {datta.price_in_uah}$</div>
            <div>
              <NavLink exact to="/Catalog">
                <StyledButton>Back to catalog</StyledButton>
              </NavLink>
              <StyledButton type="primary" onClick={cartCklickAdd}>Add to cart</StyledButton>
            </div>
          </StyledBuyInfo>
        </React.Fragment>
      )}
    </StyledItem>
  );
};

export default Item;