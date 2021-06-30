import React from 'react';
import logo from './logo.svg';
import './App.css';
import  NavBar  from "./components/NavBar";
import  RecipesPage  from "./components/RecipesPage";
import  RecipePage  from "./components/RecipePage";
import  IngredientsPage  from "./components/IngredientsPage";
import  AppPage  from "./components/AppPage";



import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      <Router>
      <NavBar />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/recipes" exact component={RecipesPage}/>
      <Route path="/recipes/:id" exact component={RecipePage}/>
      <Route path="/ingredients" exact component={IngredientsPage}/>
      <Route path="/app" exact component={AppPage}/>
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
    <h1>home</h1>
  </div>
);
export default App;
