import React, { Component } from 'react';
import Home from './components/Home/home';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
require('normalize.css/normalize.css');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Resume}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
