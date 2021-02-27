import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Body from './Body';
import history from './history';
import Loadable from "react-loadable";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

function Loading({ error }) {
  if (error) {
    return (
      <h2
        style={{
          height: "40px",
          background: "#b3d9f7",
          color: "white",
          textAlign: "center",
          verticalAlign: "middle",
          paddingTop: "5px",
          fontSize: "20px",
          fontWeight: "500"
        }}
      >
        Woops!!! Something went wrong. Try re-loading!
      </h2>
    );
  } else {
    return <LinearProgress color="secondary" />;
  }
}
const Tab1 = Loadable({
  loader: () => import("./Tab1"),
  loading: Loading
});

const Tab2 = Loadable({
  loader: () => import("./Tab2"),
  loading: Loading
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Router history={history}>
          <Switch>
            <Route exact path="/Tab1" component={Tab1} />
            <Route exact path="/Tab2" component={Tab2} />
          </Switch>
        </Router>
      </div>
        
    );
  }
}

export default App;
