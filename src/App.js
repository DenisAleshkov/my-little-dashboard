import React from 'react'
import NavBar from './components/Navigation/NavBar'
import Followers from './components/Follow/Followers'
import Following from './components/Follow/Following'
import Dashboard from './components/Dashboard/Dashboard'
import Activity from './components/Activity/Activity'
import Repositories from './components/Repositories/Repositories'
import Statisticks from './components/Statisticks/Statisticks'
import StarsRepos from './components/StarsRepos/StarsRepos'
import Profile from './components/Profile/Profile'
import { Container, Row, Col } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container fluid>
          <Row>
            <Col className="left-part">

              <Switch>
                <Route path="/followers">
                  <Followers />
                </Route>
                <Route path="/following">
                  <Following />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/statisticks">
                  <Statisticks />
                </Route>
                <Route path="/activity">
                  <Activity />
                </Route>
                <Route path="/repositories">
                  <Repositories />
                </Route>
                <Route path="/stars">
                  <StarsRepos />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
              </Switch>
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App;
