import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Packages from "./components/Packages/Packages";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Packages/>
      <ScrollToTop smooth height="25" width="25" color="#007cb6" style={{borderRadius: "50%", backgroundColor: "#caf0f8", lineHeight: "30px"}}/>
    </div>
    
  );
}

export default App;
