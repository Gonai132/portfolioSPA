import React, { useState } from 'react';
import "./home.css"
import Typewriter from 'typewriter-effect';


const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`container-fluid home ${isHovered ? 'scale-small' : ''}`}>
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
        <p className='col-xl-5 col-lg-5 col-mid-5 col-sm-7 col-8'>Cześć! Mam na imię Margaret i jestem Front-End Developerem, którego pasją jest tworzenie nowoczesnych, responsywnych stron internetowych i aplikacji SPA. Specjalizuję się w budowaniu intuicyjnych interfejsów użytkownika..</p>
        <span
          className='home-button col-xl-4 col-lg-4 col-mid-4 col-sm-6 col-8'
          onMouseEnter={() => setIsHovered(true)}  // Ustawiamy stan na true, gdy myszka wejdzie na przycisk
          onMouseLeave={() => setIsHovered(false)} // Ustawiamy stan na false, gdy myszka opuści przycisk
        >
          Zobacz więcej
        </span>
      </div>
    </div>
  );
}

export default Home