import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import {Link} from 'react-scroll';

const Navbar = ()=>{

const [navScroll, setNavScroll] = useState(false);

const onChangeNav = () => {
    if (window.scrollY>=50) {
        setNavScroll(true);
    } else {
        setNavScroll(false)
    }
};

window.addEventListener("scroll", onChangeNav);

return(
    <nav className={navScroll ? "navbar-main navbar-scroll":"navbar-main"}>
         <ul>
            <li className="nav-item home-nav">
            <Link to="home" spy={true} smooth={true} offset={-50} duration={100} activeClass="active-nav"><FontAwesomeIcon icon={faHome} /></Link></li>
            <li className="nav-item gap"> </li>
            <li className="nav-item"><Link to="about" spy={true} smooth={true} offset={-20} duration={100} activeClass="active-nav">O mnie</Link></li>
            <li className="nav-item"> <Link to="gallery" spy={true} smooth={true} offset={-5} duration={100} activeClass="active-nav">Galeria</Link></li>
            <li className="nav-item"> <Link to="questions" spy={true} smooth={true} offset={-25} duration={100} activeClass="active-nav">Pytania</Link></li>
            <li className="nav-item"> <Link to="packages" spy={true} smooth={true} offset={-5} duration={50} activeClass="active-nav">Pakiety</Link></li>
            <li className="nav-item"> <Link to="contact" spy={true} smooth={true} offset={-20} duration={100} activeClass="active-nav">Kontakt</Link></li>
  </ul>
    </nav>
);
};
export default Navbar;