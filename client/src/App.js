import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import './glovals/glovals.css';
import AuthProvider from './provider/authProvider';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin}/>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
