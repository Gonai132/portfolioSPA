import React from 'react'
import "./about.css"
import girl from "../../img/about/girl.jpg"

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
                        <span className='underline'></span>
                    </div>
                    <div className='about-text'>
                        <p>Cześć! Mam na imię Margaret i jestem front-end developerem, którego pasją jest tworzenie nowoczesnych, responsywnych stron internetowych i aplikacji. Specjalizuję się w budowaniu intuicyjnych interfejsów użytkownika, które są nie tylko estetyczne, ale i funkcjonalne. Moje projekty koncentrują się na łączeniu technologii z użytecznością, zapewniając płynne doświadczenia użytkowników. Posiadam solidną znajomość HTML, CSS i JavaScript a aktualnie uczę się frameworka React. Na bieżąco śledzę najnowsze trendy w branży, dzięki czemu jestem gotowa do realizacji zarówno klasycznych, jak i innowacyjnych rozwiązań. W pracy stawiam na współpracę, elastyczność i dokładność. Moim celem jest pomoc firmom i osobom prywatnym w osiąganiu sukcesu w cyfrowym świecie dzięki przemyślanym projektom front-endowym.</p>
                    </div>
                    
                </div>
            </div>
        </div>


    </div>
  )
}

export default About