import React from 'react'
import './App.css';
import Usuarios from './components/Usuarios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'


function App() {

  

  return (
    <Router>
      <Link to="/">Usuarios</Link>

      <Switch>
        <Route path="/">
          <Usuarios />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
