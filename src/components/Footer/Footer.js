import React from 'react'
import "./footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='container-fluid footer'>
         <Zoom>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className='footer-about'>
                        <h6>O mnie</h6>
                        <p>Portal Front-End Developera - Margaret, wraz z informacjami o dotychczasowym doświadczeniu, zrealizowanych projektach i oferowanych usługach, a także z możliwością bezpośredniego kontaktu.</p>
                        <span className='social-icon'>
                            <a href='facebook.com'><FaFacebook size={25} /></a>
                            <a href='instagram.com'><FaInstagram size={25} /></a>
                            <a href='x.com'><FaTwitter size={25} /></a>
                            <a href='linkedin.com'><FaLinkedin size={25} /></a>
                        </span>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12'>
                    <div className='footer-list'>
                    <h6>Więcej</h6>
                        <ul>
                             <Link to="home" spy={true} smooth={true} offset={-50} duration={100} ><li>Strona główna</li></Link>
                             <Link to="about" spy={true} smooth={true} offset={5} duration={100} ><li>O mnie</li></Link>
                             <Link to="gallery" spy={true} smooth={true} offset={-5} duration={100} ><li>Galeria</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12'>
                    <div className='footer-list'>
                    <h6>Przydatne linki</h6>
                        <ul>
                             <Link to="packages" spy={true} smooth={true} offset={3} duration={100} ><li>Pakiety</li></Link>
                             <Link to="contact" spy={true} smooth={true} offset={1} duration={100} ><li>Kontakt</li></Link>
                             <Link to="questions" spy={true} smooth={true} offset={1} duration={100} ><li>FAQ</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='foot'>
                    <p>Wszelkie prawa zastrzeżone  <FaRegCopyright size={13}/>  Gonai 2025</p>
                    </div>
                </div>
            </div>
        </div>
        </Zoom>
    </div>
  )
}

export default Footer