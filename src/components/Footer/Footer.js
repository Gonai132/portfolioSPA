import React from 'react'
import "./footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container-fluid footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                    <div className='footer-about'>
                        <h6>O mnie</h6>
                        <p>Portal Front-End Developera - Margaret, wraz z informacjami o zrealizowanych projektach, oferowanych usługach, z opiniami klientów i możliwością bezpośredniego kontaktu.</p>
                        <span className='social-icon'>
                            <a href='facebook.com'><FaFacebook size={25} /></a>
                            <a href='instagram.com'><FaInstagram size={25} /></a>
                            <a href='x.com'><FaTwitter size={25} /></a>
                            <a href='linkedin.com'><FaLinkedin size={25} /></a>
                        </span>
                    </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                    <div className='footer-list'>
                    <h6>Przydatne linki</h6>
                        <ul>
                            <li>Pakiety</li>
                            <li>Kontakt</li>
                            <li>FAQ</li>
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
    </div>
  )
}

export default Footer