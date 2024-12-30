import React from 'react';
import "./mySlider.css";
import Slider from "react-slick";
import web1 from '../../img/gallery/web1.jpeg';
import web2 from '../../img/gallery/web2.jpeg';
import web3 from '../../img/gallery/web3.jpeg';
import web4 from '../../img/gallery/web4.jpeg';
import web5 from '../../img/gallery/web5.jpeg';
import web6 from '../../img/gallery/web6.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
        {
            id: 1,
            image: web1,
        },
        {
            id: 2,
            image: web2,
        },
        {
            id: 3,
            image: web3,
        },
        {
            id: 4,
            image: web4,
        },
        {
            id: 5,
            image: web5,
        },
        {
            id: 6,
            image: web6,
        }
    ]

var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        initialState: 0,
        autoplay: true,
        rows: 1,
        sliderPerRow:1,
        // slidesToScroll: 1,
      };

const MySlider = () => {
  return (
    <div className='container gallery-slider'>
            <div className='gallery-slides col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12'>
            <Slider {...settings} className='slides'>
                {data.map((item, index)=>(
                    <div>
                        <div className='card content-slider' key={index}>
                            <img src={item.image} alt={"Witryna nr " + item.id} className='image-slider'/>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        
    </div>
  )
}

export default MySlider