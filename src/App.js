import React, {useState, createContext} from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Questions from "./components/Questions/Questions";
import Packages from "./components/Packages/Packages";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import "./app.css";

export const ThemeContext = createContext(null);

const App = () => {

const[theme,setTheme] = useState("light");

const toggleTheme = () =>{
  setTheme((current)=> (current === "light" ? "dark": "light"))
};

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <Navbar/>
      <NavbarMobile/>
      <div className="main-theme" id={theme}>
      <Home theme={theme} toggleTheme={toggleTheme}/>
      <About/>
      <Gallery/>
      <Questions/>
      <Packages/>
      <Contact/>
      </div>
      <Footer/>
      <ScrollToTop smooth height="20" width="20" color="#0082b6" style={{borderRadius: "5px", backgroundColor: "#caf0f8", lineHeight: "30px"}}/>
    </ThemeContext.Provider>
  );
}

export default App;
