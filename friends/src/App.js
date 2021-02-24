import React from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


import styled from "styled-components"

import Login from './components/Login'
import FriendsList from './components/ListofFriends'
import PrivateRoute from './components/PrivateRoute'

import { axiosWithAuth } from "./utils/axiosWithAuth";

import './App.css';



function App() {

  const history = useHistory();

  const logout = () => {
    // axios call to logout - usually will invalidate the token from the server
    axiosWithAuth()
      .post("/api/logout")
      .then(() => {
        // remove the token from localStorage
        localStorage.removeItem("token");
        // re-route to the Login
        history.push("/login");
      });
  };

  return (
    <Router>
      <StyledApp>

        <div className="App">
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>

            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path="/protected" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>

      </StyledApp>
    </Router>
  );
}

export default App;


const StyledApp = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding-bottom: 36px;

  ul{
  display: flex;
  justify-content: flex-end;
  margin: 0 0 36px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  li{
    list-style: none;
    margin-right: 6px;
    color: #204963;
  }

  a {
  text-decoration: none;
  padding: 6px;
  color: #204963;
}
`


