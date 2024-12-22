import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
    </div>
    
  );
}

export default App;
