import React, { Fragment } from "react";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";

const Profile = () => {
  return (
    <Fragment>
      <Container />
      <div>You're on the Profile Tab</div>
    </Fragment>
  );
};
const Comments = () => {
  return (
    <Fragment>
      <Container />
      <div>You're on the Comments Tab</div>
    </Fragment>
  );
};
const Contact = () => {
  return (
    <Fragment>
      <Container />
      <div>You're on the Contact Tab</div>
    </Fragment>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/management" exact component={Profile} />
          <Route path="/management/comments" component={Comments} />
          <Route path="/management/contact" component={Contact} />
          <Route path="/management/form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
