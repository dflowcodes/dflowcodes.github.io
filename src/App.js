import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/projects" exact component={() => <Projects />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;