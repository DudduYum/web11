import React, { useContext } from "react";
import { StyledList } from "./itemslist.styled";
import { Item } from "./Item/item";
import MyContext from "../../../Context/context";
import Snek from "../../../Icons/adidas.jpg";
import { SpinBlock } from "../../App/App.styles";
import { Spin } from "antd";

export const ItemsList = () => {
  const { data } = useContext(MyContext);

  const load = () => {
    return (
      <SpinBlock>
        <Spin size="large" />
      </SpinBlock>
    );
  };

  return (
    <StyledList>
      {data.length == 0
        ? load()
        : data.map(
            ({
              name,
              price_in_uah,
              id,
            }) => (
              <Item
                header={name}
                imgSrc={Snek}
                price={price_in_uah}
                id={id}
                key={id}
                width="290"
              />
            )
          )}
    </StyledList>
  );
};

export default ItemsList;