import './Slider.css';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from '../../images/img1.png';
import s2 from '../../images/img2.png';
import s3 from '../../images/img3.png';
import s4 from '../../images/img4.png';
import s5 from '../../images/img5.png';
import s6 from '../../images/img6.png';
import s7 from '../../images/img7.png';
// import s8 from '../../images/img8.png';


const ImagesSlider = ({ images }) =>
{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: null,
        prevArrow: null,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <img src={s1} alt="1" />
                <img src={s2} alt="2" />
                <img src={s3} alt="3" />
                <img src={s4} alt="4" />
                <img src={s5} alt="5" />
                <img src={s6} alt="6" />
                <img src={s7} alt="7" />
                {/* <img src={s8} alt="8" /> */}
            </Slider>
        </div>
    );
};

export default ImagesSlider;
