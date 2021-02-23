import React from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";

import styled from "styled-components"

import './App.css';



function App() {
  return (
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
          <PrivateRoute exact path="/protected" component={ } />
        </Switch>


      </div>
    </StyledApp>
  );
}

export default App;


const StyledApp = styled.div`

`


