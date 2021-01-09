import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Main from "../../Icons/accessories.jpg";
import Snek from "../../Icons/adidas.jpg";
import API from "../../API/APIserv";
import {
  MainBody,
  StyledEvents,
  StyledCardComponents,
  StyledCard,
  TextStyle
} from "./home.style";
import {SpinBlock} from "../App/App.styles";
import { Card, Button,Spin } from "antd";
import "antd/dist/antd.css";

const Home = () => {
  const { Meta } = Card;
  const [data, setData] = useState(undefined);
  const load = () => {
    async function getData() {
      let userData = await API.get("/sneaker");
      setData(userData.data);
      console.log(data);
    }
    setTimeout(() => {
      getData();
    }, 1000);
  };

  useEffect(load, []);

  const spiner = () => {
    return (
      <SpinBlock>
        <Spin size="large" />
      </SpinBlock>
    );
  };

  const [countOfElements, setcountOfElements] = useState(4);

  return (
    <MainBody>
       <TextStyle>
            <h1>New design</h1>
            <img src={Main} />
          </TextStyle>
      <StyledEvents>
      {data === undefined
          ? spiner()
          : data
              .slice(0, countOfElements)
              .map(({name,price_in_uah, id }) => (
                <StyledCard
                  hoverable
                  cover={<img alt="example" src={Snek} />}
                  key={id}
                >
                  <StyledCardComponents>
                    <Meta header={name} />
                    Price: ${price_in_uah}
                    <NavLink
                      to={"/item/" + id}
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                <Button type="primary">More</Button>
              </NavLink>
            </StyledCardComponents>
          </StyledCard>
        ))}
      </StyledEvents>
      <Button
        size="large"
        style={{ borderRadius: 5, margin: 20 }}
        onClick={() => {
          setcountOfElements(countOfElements + 4);
        }}
      >
        Veiw more
      </Button>
    </MainBody>
  );
};

export default Home;
