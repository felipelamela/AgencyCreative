import styles from "./App.module.css";
import React from "react";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Home from "./components/Home/Home";
import AboutUS from "./components/AboutUs/AboutUS";
import Sevices from "./components/Sevices/Sevices";
import Projects from "./components/Projects/Projects";
import Testimonial from "./components/Testimonial/Testimonial";
import Collaboration from "./components/Collaboration/Collaboration";

function App() {
  return (
    <div className={styles}>
      <HeaderNav />
      <Home />
      <AboutUS />
      <Sevices />
      <Projects />
      <Testimonial />
      <Collaboration />
    </div>
  );
}

export default App;
