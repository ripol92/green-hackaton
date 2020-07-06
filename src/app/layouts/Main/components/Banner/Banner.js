import React from 'react';
import { Link } from 'react-router-dom';

import './banner.scss';

import banner_img from '../../../../shared/assets/images/banner_image.svg';

function Banner() {
    return (
        <div className="Banner">
            <div className="container">
                <div className="banner-text-content">
                    <h1 className="banner-title">
                        Мы за <br /> чистый город!
                    </h1>
                    <p className="banner-text">
                        {/* Проявите социальную ответственность — <br />
                        сфотографируйте и отправьте нам */}
                        Чистый город — платформа для решения <br /> экологических проблем твоего города.
                    </p>
                </div>

                <img src={banner_img} className="banner-img" alt="banner" />

                <div className="button-content">
                    <Link to="/application" className="button button-lg button-success">Оставить заявку</Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;