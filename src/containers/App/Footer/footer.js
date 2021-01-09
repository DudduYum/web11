import React from "react";
import { MainFooter,Icons,Place,IconsSoc,Logo,IconLogo} from "./footer.styled";
import Icon, {
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  RadiusBottomleftOutlined,
  DribbbleSquareOutlined
} from "@ant-design/icons";

  const Footer = () => (
  <MainFooter>
  <Place>
    <Icons component={RadiusBottomleftOutlined}/>
  <p>Українська</p>
  </Place>
  <Logo>
    <IconLogo component={DribbbleSquareOutlined} />
    <p>Sneakers</p>
  </Logo>

   <IconsSoc>
   <Icons component={YoutubeOutlined} />
          <Icons component={TwitterOutlined}  />
          <Icons component={InstagramOutlined} />
   </IconsSoc>
  </MainFooter>
  );
  export default Footer;