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
              strings: ['Front-end developer', 'Margaret S.', 'Interaktywne i responsywne SPA', 'Projektowanie UI/UX'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>Cześć! Mam na imię Margaret i jestem front-end developerem, którego pasją jest tworzenie nowoczesnych, responsywnych stron internetowych i aplikacji SPA. Specjalizuję się w budowaniu intuicyjnych interfejsów użytkownika, które są nie tylko estetyczne, ale i funkcjonalne.</p>
        <span
          className='home-button'
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