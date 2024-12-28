import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";



const Navbar = ()=>{

return(
    <nav className="navbar-main">
        <ul>
            <li className="nav-item"><FontAwesomeIcon icon={faHome} /></li>
            <li className="nav-item"> </li>
            <li className="nav-item">O mnie</li>
            <li className="nav-item">Galeria</li>
            <li className="nav-item">Motto</li>
            <li className="nav-item">Pakiety</li>
            <li className="nav-item">Kontakt</li>
        </ul>
    </nav>
);
};
export default Navbar;