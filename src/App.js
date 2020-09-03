import React from 'react';
import SideBar from './components/Navigation/SideBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <Router>
        <SideBar />
           <Switch>
             <Route path="/home">
               <Home />
             </Route>
              <Route path="/login">
               <Login />
             </Route>
           </Switch>
       </Router>
   </div>
  )
}

export default App;
