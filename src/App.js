import React from "react";
import "./App.css";
import News from './components/News'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import ShowCoin from "./components/ShowCoin";
import Exchange from "./components/Exchange";
import Calculator from "./components/Calculator";
import Bar from './components/Bar'
import Events from "./components/Events";

const App = () => {

  return (
    <Router>
      <Navbar/>
      <br/>
      <Bar/>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/news' exact component={News} />
            <Route path='/coindata/:id' exact component={ShowCoin} />
            <Route path='/exchanges' exact component={Exchange} />
            <Route path='/calculator' exact component={Calculator} />
            <Route path='/events' exact component={Events} />
          </Switch>
       </Router>
    );
  }

export default App;