import styles from "./App.module.css";
import React from "react";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Home from "./components/Home/Home";
import AboutUS from "./components/AboutUs/AboutUS";

function App() {
  return (
    <div className={styles}>
      <HeaderNav />
      <Home />
      <AboutUS />
    </div>
  );
}

export default App;
