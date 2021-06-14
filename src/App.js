import React from "react";
import "./App.css";
import News from './components/News'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import ShowCoin from "./components/ShowCoin";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Exchange from "./components/Exchange";

const App = () => {

  return (
    <Router>
      <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/news' exact component={News} />
            <Route path='/coindata/:id' exact component={ShowCoin} />
            <Route path='/exchanges' exact component={Exchange} />
          </Switch>
       </Router>
    );
  }

export default App;