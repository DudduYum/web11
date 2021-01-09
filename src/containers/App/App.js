import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { StyledApp } from "./App.styles";
import MyContext from "../../Context/context";
import Home from "../Home/home";
import Cart from "../Cart/cart";
import Catalog from "../Catalog/catalog";
import Item from "../Item/item";
import CartForm from "../CartForm/cartform";
import Success from "../Success/success";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalContextProvider } from "../../Redux/provider";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updataArr = (arr) => {
      this.setState(() => ({
        data: arr,
      }));
    };

    this.state = {
      data: [],
      updataArr: this.updataArr,
    };
  }

  render() {
    return (
      <Router>
        <GlobalContextProvider>
        <MyContext.Provider value={this.state}>
          
        <StyledApp>
              <Header />
              <Switch>
                <Route path="/Catalog">
                  <Catalog />
                </Route>
                <Route path="/Cart">
                  <Cart />
                </Route>
                <Route path="/CartForm">
                  <CartForm />
                </Route>
                <Route path="/Success">
                  <Success />
                </Route>
                <Route path="/item/:id">
                  <Item />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
              <Footer />
            </StyledApp>
        </MyContext.Provider>
        </GlobalContextProvider>
      </Router>
    );
  }
}
export default App;