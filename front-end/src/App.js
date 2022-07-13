import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import './styles/App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        {/* <Route exact path="/register" component={ Login } />
        <Route exact path="/customer/products" component={ Login } />
        <Route exact path="/seller/orders" component={ Login } />
        <Route exact path="/admin/manage" component={ Login } /> */}
        <Route component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
