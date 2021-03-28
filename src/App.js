import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Product from "./Product";
import image from "./banner_image.png";
import Login from "./Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route exact path="/">
            <Navbar />
            <Banner />

            <div className="app__product">
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
            </div>
            <div className="app__product">
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
            </div>
            <div className="app__product">
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
              <Product
                image={image}
                title="shoes"
                price="20.00$"
                description="Very good product"
                id={1}
              />
            </div>
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
