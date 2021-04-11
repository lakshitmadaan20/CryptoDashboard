import React, { Component } from "react";
import "./App.css";
import News from './components/News'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import ShowCoin from "./components/ShowCoin";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const App = () => {

  return (
    <Router>
      <Navbar />
       {/* <div className="text-center" style={{width:"5px", height:'5px'}}>
       <img src="https://cdn-japantimes.com/wp-content/uploads/2018/01/z2-crypto-a-20180123.jpg" className="rounded" alt="..." />
       </div> */}
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/news' exact component={News} />
            <Route path='/coindata/:id' exact component={ShowCoin} />
          </Switch>
       </Router>
    );
  }

export default App;