import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components/Navbar.js';
import ProductList from './components/ProductList';
import Details from './components/Details.js';
import Cart from './components/Cart.js';
import Default from './components/Default.js';


export class App extends React.Component{
  render(){
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" components={ProductList}/>
        <Route path="/details" components={Details}/>
        <Route path="/cart" components={Cart}/>
        <Route components={Default}/>
      </Switch>
    </React.Fragment>
    
  );
 }
}

export default App;
