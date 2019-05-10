import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/";
import Dashboard from "./pages/Dashboard/";
import AllActivities from "./pages/AllActivities/";
import ActivityDetail from "./pages/ActivityDetail/";
import NewActivity from "./pages/NewActivity/";
import Challenges from "./pages/Challenges/";
import Login from "./pages/Login/";
import Signup from "./pages/Signup/";
import NoMatch from "./pages/NoMatch";
// import Landing from "./pages/Landing";
import './App.css';

const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={AllActivities} />
        <Route exact path="/activities/:id" component={ActivityDetail} />
        <Route exact path="/newactivity" component={NewActivity} />
        <Route exact path="/challenges" component={Challenges} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
