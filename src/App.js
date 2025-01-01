import React, {useState, createContext} from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Questions from "./components/Questions/Questions";
import Packages from "./components/Packages/Packages";
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
      <Home/>
      <div className="main-theme" id={theme}>
      <About/>
      <Gallery/>
      <Questions/>
      <Packages/>
      </div>
      <Footer/>
      <ScrollToTop smooth height="25" width="25" color="#007cb6" style={{borderRadius: "50%", backgroundColor: "#caf0f8", lineHeight: "30px"}}/>
    </ThemeContext.Provider>
  );
}

export default App;
