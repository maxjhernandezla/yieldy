// import './Slider.scss';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from '../../images/img1.png';

const ImagesSlider = ({ images }) =>
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings} className='slider'>
                <div className="screenshot">
                    <img src={s1} alt="1" />
                </div>
                <div className="screenshot">
                    <img src={s1} alt="2" />
                </div>
                <div className="screenshot">
                    <img src={s1} alt="3" />
                </div>
                <div className="screenshot">
                    <img src={s1} alt="4" />
                </div>
                <div className="screenshot">
                    <img src={s1} alt="5" />
                </div>
                <div className="screenshot">
                    <img src={s1} alt="6" />
                </div>
                <div className="screenshot">
                    <img src={s1} alt="7" />
                </div>
                <div className="screenshot">
                    <img src={s1} alt="8" />
                </div>
            </Slider>
        </div>
    );
};

export default ImagesSlider;
