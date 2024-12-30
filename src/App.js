import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Questions from "./components/Questions/Questions";
import Packages from "./components/Packages/Packages";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import "./app.css";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
      <Questions/>
      <Packages/>
      <Footer/>
      <ScrollToTop smooth height="25" width="25" color="#007cb6" style={{borderRadius: "50%", backgroundColor: "#caf0f8", lineHeight: "30px"}}/>
    </div>
    
  );
}

export default App;
