import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //for Link outside the Router works
import './App.css';

function App() {
  return (
    <> 
    {/* fragment */}
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
