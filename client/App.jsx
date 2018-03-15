import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home.component';
import About from './components/About/About.component';

class App extends Component {
  render() {

    return (
      <div className="container">
        {/*<nav className="navbar navbar-light">*/}
        {/*<ul className="nav navbar-nav">*/}
        {/*<li><Link to="/">Home</Link></li>*/}
        {/*<li><Link to="/about">About</Link></li>*/}
        {/*</ul>*/}
        {/*</nav>*/}

        {/*<Switch>*/}
        {/*<Route exact path="/" component={Home}/>*/}
        {/*<Route path="/about" component={About}/>*/}
        {/*</Switch>*/}

        <h1>Hail a Table</h1>
        <h2>Welcome to our site</h2>

        <Home/>

      </div>
    );
  }
}

export default App;