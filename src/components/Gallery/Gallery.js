import React from 'react';
import "./gallery.css";
import web1 from '../../img/gallery/web1.jpeg';
import web2 from '../../img/gallery/web2.jpeg';
import web3 from '../../img/gallery/web3.jpeg';
import web4 from '../../img/gallery/web4.jpeg';
import web5 from '../../img/gallery/web5.jpeg';
import web6 from '../../img/gallery/web6.jpeg';
import MySlider from '../MySlider/MySlider';

const Gallery = () => {

    const data = [
        {
            id: 1,
            image: web2,
            name: "Projekt nr 1",
            opis: "Strona internetowa stworzona w React z responsywnym designem i interaktywnymi sekcjami, wykorzystująca HTML, CSS i JavaScript."
        },
        {
            id: 2,
            image: web1,
            name: "Projekt nr 2",
            opis: "Projekt portfolio z dynamiczną nawigacją i optymalizowaną grafiką, zbudowany w React z użyciem SCSS."
        },
        {
            id: 3,
            image: web3,
            name: "Projekt nr 3",
            opis: "Strona-wizytówka z galerią zdjęć i animacjami CSS, oparta na technologii React i Flexbox z intuicyjnym interfejsem."
        },
        {
            id: 4,
            image: web4,
            name: "Projekt nr 4",
            opis: "Aplikacja typu SPA- Single Page Application z formularzem kontaktowym i nowoczesnym designem, wykorzystująca React Scroll."
        },
        {
            id: 5,
            image: web5,
            name: "Projekt nr 5",
            opis: "Strona responsywna z animowanymi sekcjami i ikonami FontAwesome, zaprojektowana we frameworkach React oraz Bootstrap."
        },
        {
            id: 6,
            image: web6,
            name: "Projekt nr 6",
            opis: "Projekt dynamicznej strony z układem Grid, responsywny i zoptymalizowany pod różne urządzenia zarówno tablety jak i telefony"
        }
    ]

  return (
    <div className='container gallery-section' id='gallery'>
       <div className='section-title'>
            <h2>Galeria</h2>
            <span className='line'></span>
        </div>
        <MySlider/>
        <div className='center-slider-text'>
            <div className='about-text col-xl-9 col-lg-10 col-md-10 col-sm-12 col-12 slider-text'>
                <h6>Powyżej znajduje się galeria projektów stron internetowych wygenerowanych przez narzędzie AI - Freepick, na potrzeby tego projektu studenckiego, gdyż sama nie mam ich jeszcze wiele we własnym portfolio. Poniżej wszystkie stony z galerii wraz z krótkimi opisami.
                </h6>
            </div>
        </div>
        <div className='row'>
            {data.map((item, index)=>(
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                    <div className='card gallery-item'>
                    <img src={item.image} alt={"Witryna nr " + item.id}/>
                        <div className='gallery-name'>
                            {item.name}
                        </div>
                        <span id='line-gallery'></span>
                        <div className='gallery-description'>
                            {item.opis}
                        </div>
                   </div>
                </div>
            ))}

        </div>
        
    </div>
  )
};

export default Gallery