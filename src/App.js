import React from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Product from './Components/Product'
import ProductChild from './Components/ProductChild'



function App() {
  return (
    <div className="App">

    <Router>

     <Switch>

         <Route exact path="/">
            <Product />
          </Route>
          
          <Route exact  path="/product/:id">
            <ProductChild />
          </Route>
         
          
        </Switch> 
    
    
    </Router>





     
    </div>
  );
}

export default App;
