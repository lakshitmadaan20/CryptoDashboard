import React from "react";
import News from './components/News'
import Crypto from './components/Crypto'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import ShowCoin from "./components/ShowCoin";
import Exchange from "./components/Exchange";
import Calculator from "./components/Calculator";
import Home from './components/Home'
import Footer from "./components/Footer";
import Resources from './components/Resources'

const App = () => {

  return (
    <Router>
      <Navbar/>
      <br/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/crypto' component={Crypto}/>
            <Route exact path='/news' component={News} />
            <Route exact path='/coindata/:id'component={ShowCoin} />
            <Route exact path='/exchanges' component={Exchange} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/calculator' component={Calculator} />
          </Switch>
          <Footer/>
       </Router>
    );
  }

export default App;