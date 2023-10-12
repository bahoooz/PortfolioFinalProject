import React from "react";
import Navbar from "./components-jsx/Navbar";
import Header from "./components-jsx/Header";
import Histoire from "./components-jsx/Histoire";
import Portfolio from "./components-jsx/Portfolio";
import Contact from "./components-jsx/Contact";
import Footer from "./components-jsx/Footer";
import '../global-code/components-css/GlobalPortfolio.css'

const GlobalPortfolio = () => {
    return ( 
        <div id="global-portfolio">
        <Navbar />
        <Header />
        <Portfolio />
        <Histoire />
        <Contact />
        <Footer />
        </div>
     );
}
 
export default GlobalPortfolio;