import React from "react";
import chef from "./img/cooking-chef.png";
import "./App.css";
import NavBar from "./components/NavBar";
import RecipesPage from "./components/RecipesPage";
import RecipePage from "./components/RecipePage";
import IngredientsPage from "./components/IngredientsPage";
import AppPage from "./components/AppPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={RecipesPage} />
          <Route path="/recipes/:id" exact component={RecipePage} />
          <Route path="/ingredients" exact component={IngredientsPage} />
          <Route path="/app" exact component={AppPage} />
          {/* <Route path="/company/:id" component={CarByCompany}/> 
      <Route path="/:vin" component={VINCheck}/>    */}
          {/* <Route path="/info" exact component={Home}/>  */}
          {/* <Route path="/company/:id/:id" component={CarDetails} />  */}
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to WhatToCook App</h1>
    <div className="home-page-container">
    <h2>About our app</h2>
      <div className="home-page-container-content">
        <div className="home-page-container-text">
        <div className="home-page-container-text-1">
          <h5>
            It helps you find what to cook based on your available ingredients
          </h5>
          <br/>
        </div>
        <div className="home-page-container-text-2">
          <h5>
            You can also search through all recipes or ingredients for more information
          </h5>
        </div>
        </div>
        <div className="home-page-container-image">
          <img src={chef} alt="d" width="300"></img>
        </div>
      </div>
    </div>
  </div>
);
export default App;
