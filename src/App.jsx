import "./styles.css";
import React, { useRef } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SpringCards from "./components/SpringCards";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
// import { Navbar, Nav } from "react-bootstrap";

function MainPage(props) {
  return (
    <div className="App">
      <SpringCards />
      <Home />
      <Gallery />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/<3<3<3/:id"
          render={(props) => <SpringCards {...props} />}
        />
        <Route
          exact
          path="/details/:id"
          render={(props) => <Details {...props} />}
        />
        <Route
          exact
          path="/gallery/:id"
          render={(props) => <Gallery {...props} />}
        />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}
