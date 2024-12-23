import React from 'react'
import "./about.css"
import girl from "../../img/about/girl.jpg"
import { FaReact } from "react-icons/fa";
import { FcReading, FcSmartphoneTablet } from "react-icons/fc";

const About = () => {
  return (
    <div className='container about-section'>
        <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-image'>
                    <img src={girl} height="400px" width="400px" alt='about_image'/>
                </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-details'>
                    <div className='about-title'>
                        <h2>Kim jestem?</h2>
                        <span className='line'></span>
                    </div>
                    <div className='about-text'>
                        <p>Cześć! Mam na imię Margaret i jestem Front-End Developerem, którego pasją jest tworzenie nowoczesnych, responsywnych stron internetowych i aplikacji. Specjalizuję się w budowaniu intuicyjnych interfejsów użytkownika, które są nie tylko estetyczne, ale i funkcjonalne. 
                        </p>
                    </div>
                    <div className='card-design'>
                        <div className='about-item'>
                            <div className='about-icon'>
                                <p><FcSmartphoneTablet size={40} color='#00b4d8'/></p>
                            </div>
                            <div>
                                <p>Moje projekty koncentrują się na łączeniu technologii z użytecznością i responsywnością, zapewniając płynne doświadczenia użytkowników.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-design'>
                        <div className='about-item'>
                            <div className='about-icon'>
                                <p><FaReact size={40} color='#00b4d8'/></p>
                            </div>
                            <div>
                                <p>Posiadam solidną znajomość HTML, CSS i JavaScript, a aktualnie uczę się frameworka React podczas certyfikacji od Meta.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-design'>
                        <div className='about-item'>
                            <div className='about-icon'>
                            <p><FcReading size={44} color='#00b4d8'/></p>
                            </div>
                            <div>
                                <p>Na bieżąco śledzę najnowsze trendy w branży. W pracy stawiam na współpracę, elastyczność i dokładność.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default About