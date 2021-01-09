import React from "react";
import {HeaderStyle,Icons,IconW,Linked} from "./header.styled";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import {
  DribbbleSquareOutlined,
} from "@ant-design/icons";


  const Layout = () => (
  <HeaderStyle title="Sneaker shop">
   <div>
  <Linked>
   <ul>
   <li>
          <NavLink exact to="/home" activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
        </li>
        </ul>
        </Linked>
   <IconW>
     <Icons component={DribbbleSquareOutlined} />
   </IconW>
   <p>SNEAKER WORLD</p>
   <Linked>
   <ul>
   <li>
          <NavLink exact to="/Cart" activeClassName="selected">Cart</NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="selected">Contact</NavLink>
        </li>
   </ul>
   </Linked>
   </div>
     </HeaderStyle>

  );

  export default Layout;