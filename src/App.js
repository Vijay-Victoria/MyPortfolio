import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { projects, testimonials, skills } from './data';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/About" component={About} />
          <Route path="/projects" render={() => <Projects projects={projects} />} />
          <Route path="/skills" render={() => <Skills skills={skills} />} />
          <Route path="/testimonials" render={() => <Testimonials testimonials={testimonials} />} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={() => <h2>404 Not Found</h2>} />
        </Switch>
      </div>
    </Router>
  );
}
