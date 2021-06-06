import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/home';
import Services from './Pages/Services';
import Product from './Pages/product';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Product} />
          <Route path="/sign-up" exact component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
