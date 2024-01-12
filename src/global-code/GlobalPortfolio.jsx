import React from "react";
import Navbar from "./components-jsx/Navbar";
import Header from "./components-jsx/Header";
import Histoire from "./components-jsx/Histoire";
import Portfolio from "./components-jsx/Portfolio";
import Footer from "./components-jsx/Footer";
import "../global-code/components-css/GlobalPortfolio.css";
import Skills from "./components-jsx/Skills";
import Blur from "./components-jsx/Blur";

const GlobalPortfolio = () => {
  return (
    <div id="global-portfolio">
      <Blur />
      <Navbar />
      <Header />
      <Portfolio />
      <Skills />
      <Histoire />
      <Footer />
    </div>
  );
};

export default GlobalPortfolio;
