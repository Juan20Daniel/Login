import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import LoginSigin from './pages/loginSigin/LoginSigin';
import './glovals/glovals.css';
function App() {
  return (
   
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/access" component={LoginSigin} />
        </Switch>
      </BrowserRouter>
   
  );
}

export default App;
