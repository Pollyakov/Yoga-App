import "./App.css";
import React from "react";
import Asana from "./Components/Asana/Asana";
import Gallery from "./Components/Gallery/Gallery";
import Constructor from "./Pages/Constructor";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import AsanaInfo from "./Components/AsanaInfo/AsanaInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route exact path="/asanas" component={Gallery} />
          {/* <Route exact path="/asanas/:id" component={Asana} /> */}
          <Route
                 exact path="/asanas/:id" 
                 render={(props) => (
                   <AsanaInfo {...props} id={props.id}  />
                 )}
           />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
