import './App.css';
import React from 'react'
import Header from './containers/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/Productdetails'

function App() {
  return (
    <div className="App">
    <Router>
       <Header />
       <Switch>
       <Route path="/" exact component={ProductListing} />
       <Route path="/product/:productId" exact component={ProductDetail} />
       <Route> 404 Page Not Found </Route>
       </Switch>
    </Router>
    </div>
  );
}

export default App;
