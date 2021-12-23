import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import LoginSigin from './pages/loginSigin/LoginSigin';
import AuthProvider from './provider/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/access" component={LoginSigin} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
