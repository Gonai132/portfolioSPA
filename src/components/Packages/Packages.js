import React, { useState } from 'react';
import "./packages.css";
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive,FaDiceSix} from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import girl from "../../img/about/girl.jpg";
import package1 from "../../img/packages/package1.jpg";
import package2 from "../../img/packages/package2.jpg"
import package3 from "../../img/packages/package3.jpg"
import package4 from "../../img/packages/package4.jpg"
import package5 from "../../img/packages/package5.jpg"
import package6 from "../../img/packages/package6.jpg"

const Packages = () => {

    const packagesdata = [
        
        {
            id:1,
            name: "Pakiet Podstawowy",
            type: "Strona wizytówka",
            desctiption: "Dla firm i osób potrzebujących prostej strony informacyjnej",
            details: `
                    1-3 podstrony,
                    Responsywny design,
                    Podstawowa optymalizacja SEO, 
                    Formularz kontaktowy
                `,
            price: "1 500 - 2 500 PLN",
            dice: <FaDiceOne size={"30px"} style={{color: "orange"}}/>,
            image: [<img src={package1} height="200px" width="200px" alt='about_image'/>],

        },
        {
            id:2,
            name: "Pakiet Standardowy",
            type: "Strona Firmowa",
            desctiption: "Dla firm potrzebujących rozbudowanej strony internetowej",
            details: `
                        Do 5 podstron,
                        System zarządzania treścią (CMS),
                        Responsywny design,
                        Rozszerzona optymalizacja SEO,
                        Formularz kontaktowy i mapa Google,
                        Podstawowa analiza danych (np. Google Analytics)          
                `,
            price: "2 500 - 4 000 PLN",
            dice: <FaDiceTwo size={"30px"} style={{color: "orange"}}/>,
            image: [<img src={package2} height="200px" width="200px" alt='about_image'/>],
        },
        {
            id:3,
            name: "Pakiet Standardowy Plus",
            type: "Strona Firmowa Plus",
            desctiption: "Dla firm potrzebujących rozbudowanej strony z możliwością zarządzania treścią",
            details: `
                    Cała zawartość Pakietu Standardowego plus system zarządzania treścią (CMS), np. WordPress
                `,
            price: "4 500 - 5 500 PLN",
            dice: <FaDiceThree size={"30px"} style={{color: "orange"}}/>,
            image: [<img src={package3} height="200px" width="200px" alt='about_image'/>],
        },
        {
            id:4,
            name: "Pakiet Rozszerzony",
            type: "Strona E-Commerce",
            desctiption: "Dla małych firm, które chcą sprzedawać produkty lub usługi online",
            details: `        
                    Do 10 podstron,
                    Sklep internetowy z koszykiem, płatnościami online, opcją logowania dla klientów,
                    System zarządzania treścią (CMS),
                    Zaawansowana optymalizacja SEO,
                    Zabezpieczenia SSL,
                    Integracja z systemami płatności
                `,
            price: "6 000 - 10 000 PLN",
            dice: <FaDiceFour size={"30px"} style={{color: "orange"}}/>,
            image: [<img src={package4} height="200px" width="200px" alt='about_image'/>],
        },
        {
            id:5,
            name: "Pakiet Rozszerzony Plus",
            type: "Strona E-Commerce Plus",
            desctiption: "Dla dużych firm, które chcą sprzedawać produkty lub usługi online",
            details: `
                    Cała zawartość Pakietu Rozszerzonego plus analiza ruchu i sprzedaży oraz wsparcie techniczne przez pierwszy miesiąc
                `,
            price: "10 000 - 12 000 PLN ",
            dice: <FaDiceFive size={"30px"} style={{color: "orange"}}/>,
            image: [<img src={package5} height="200px" width="200px" alt='about_image'/>],
        },
        {
            id:6,
            name: "Pakiet Premium",
            type: "Strona Premium VIP",
            desctiption: "W pełni spersonalizowana strona o zaawansowanej funkcjonalności i pełnym wsparciu",
            details: `        
                    Bez limitu podstron,
                    Zaawansowane technologie i w pełni spersonalizowany projekt,
                    Zaawansowana optymalizacja SEO,
                    Zabezpieczenia SSL
                `,
            price: "12 000 - 15 000 PLN plus 2-5 tyś. pln miesięcznie za obsługę",
            dice: <FaDiceSix  size={"30px"} style={{color: "orange"}}/>,
            image: [<img src={package6} height="200px" width="200px" alt='about_image'/>],
        },
    ]

    const [showMore, setShowMore] = useState(3);

    const loadMore = () => {
        setShowMore((prev)=>prev+3);
    }

    const loadLess = () => {
        setShowMore((prev) => Math.max(prev - 3, 3));
    }

  return (
    <div className='container packages-section'>
        <div className='section-title'>
            <h2>Pakiety</h2>
            <span className='line'></span>
        </div>
        <div className='row packages-row'> 
            {packagesdata.slice(0,showMore).map((item,index)=>(
                <div className='wrap col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                    <div className='packages' key={index}>
                        <div className='list-packages'>
                            <h5>{item.dice} {item.id}  {item.name}</h5>
                            <span className='packages-underline'></span>
                            <h6>{item.type}</h6>
                            <div>{item.image}</div>
                            <h6>{item.desctiption}</h6>
                            <span className='packages-underline'></span>
                            <p>{item.details}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                </div>
            ))}

            {showMore >= packagesdata.length ? null : (
                <span className='load-button more' onClick={loadMore}>
                Pokaż więcej <MdExpandMore size={"40px"} />
                </span>
            )} 

            {showMore > 3 && (
                    <span className='load-button less' onClick={loadLess}>
                        <MdExpandLess size={"40px"}/> Pokaż mniej 
                    </span>
            )}
        
        </div>
    </div>
  )
}

export default Packages