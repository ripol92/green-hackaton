import React from 'react';
import Slider from "react-slick";

import './partners.scss';

function Partners(props) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
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

    const partners = props.partners && props.partners.length > 0 ?
        props.partners.map((partner, index) =>
            <div className="slide-item" key={index}>
                <a href={partner.link} className="partner-link">
                    <img src={partner.logo} alt="partner_logo" height="50" />
                </a>
            </div>
        ) : <></>

    return (
        <div className="Partners">
            <Slider {...settings}>
                {partners}
            </Slider>
        </div>
    );
}
export default Partners;