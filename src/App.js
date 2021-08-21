import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //for Link outside the Router works
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <> 
    {/* fragment */}
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact 
            component={Home}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
