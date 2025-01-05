import React, { useState } from 'react';
import "./home.css"
import Typewriter from 'typewriter-effect';
import {Link} from 'react-scroll';
import Fade from "react-reveal/Fade";
import { MdDarkMode, MdLightMode } from "react-icons/md";


const Home = ({theme,toggleTheme}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`container-fluid home ${isHovered ? 'scale-small' : ''}`} id='home'>
      <div className='theme-change' onClick={()=>toggleTheme()}> 
        {theme === "light" ?(<p><MdDarkMode size={25}/></p>):(<p><MdLightMode size={25}/></p>)}
      </div>
      <Fade left>
      <div className='container home-content'>
        <h1 className='home-title'>
          <Typewriter
            options={{
              strings: ['Front-end developer', 'Margaret S.', 'Interaktywne SPA', 'Projektowanie UI/UX'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className='col-xl-5 col-lg-5 col-mid-5 col-sm-7 col-7'>Cześć! Mam na imię Margaret i jestem Front-End Developerem, którego pasją jest tworzenie nowoczesnych, responsywnych stron internetowych i aplikacji SPA. Specjalizuję się w budowaniu intuicyjnych interfejsów użytkownika..</p>
        <span
          className='home-button col-xl-4 col-lg-4 col-mid-4 col-sm-6 col-8'
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
        ><Link to="about" spy={true} smooth={true} offset={-20} duration={100} activeClass="active-nav">Zobacz więcej</Link>
        </span>
      </div>
      </Fade>
    </div>
  );
}

export default Home