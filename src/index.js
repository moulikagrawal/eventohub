import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Events from './Events.js';
import About from './About.js';
import Contact from './Contact.js';
import reportWebVitals from './reportWebVitals';
import AddEvent from './AddEvent.js'
import Login from './Login.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Events" component={Events} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/AddEvent" component={AddEvent} />
        <Route path="/Login" component={Login} />
      </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
