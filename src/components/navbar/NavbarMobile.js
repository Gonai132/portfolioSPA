import React, { useState } from 'react';
import "./navbarmobile.css"
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";

const NavbarMobile = () => {

    const [open,setOpen] = useState(false);

    const handleNavbar = () => {
        setOpen(!open)
    }

    
  return (
    <div className='responsive-mobile-view'>
        <div className='container-fluid mobile-view-header'>
            <p onClick={handleNavbar}><GiHamburgerMenu size={30}/></p>
        </div>
        {open ? (
        <div className='mobile-nav'>
            <ul>
                        <li className="nav-item home-nav">
                        <Link to="home" spy={true} smooth={true} offset={-50} duration={100} activeClass="active-nav"><FontAwesomeIcon icon={faHome} size='20'/></Link></li>
                        <li className="nav-item"><Link to="about" spy={true} smooth={true} offset={-24} duration={100} activeClass="active-nav">O mnie</Link></li>
                        <li className="nav-item"> <Link to="gallery" spy={true} smooth={true} offset={-24} duration={100} activeClass="active-nav">Galeria</Link></li>
                        <li className="nav-item"> <Link to="questions" spy={true} smooth={true} offset={-23} duration={100} activeClass="active-nav">Pytania</Link></li>
                        <li className="nav-item"> <Link to="packages" spy={true} smooth={true} offset={-23} duration={50} activeClass="active-nav">Pakiety</Link></li>
                        <li className="nav-item"> <Link to="contact" spy={true} smooth={true} offset={-23} duration={100} activeClass="active-nav">Kontakt</Link></li>
              </ul>
        </div>
        ):null}
    </div>
  )
}

export default NavbarMobile