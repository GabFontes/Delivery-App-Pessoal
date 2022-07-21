import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Customer from './Pages/Customer';
import Checkout from './Pages/Checkout';
import Administrator from './Pages/Administrator';
import Seller from './Pages/Seller';
import NotFound from './Pages/NotFound';
import './styles/App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Customer } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/seller/orders" component={ Seller } />
        <Route exact path="/admin/manage" component={ Administrator } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
