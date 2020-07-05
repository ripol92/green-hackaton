import React from 'react';

import './footer.scss';

import undp_logo from '../../assets/images/undp_logo.svg';
import ic_facebook from '../../assets/images/ic_facebook.svg';
import ic_instagram from '../../assets/images/ic_instagram.svg';
import ic_telegram from '../../assets/images/ic_telegram.svg';
import ic_youtube from '../../assets/images/ic_youtube.svg';

function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2><span className="green-text">Clean</span> City</h2>
                        <div className="social-links">
                            <a href="/#" className="social-link">
                                <img src={ic_facebook} alt="ic_facebook" />
                            </a>
                            <a href="/#" className="social-link">
                                <img src={ic_instagram} alt="ic_instagram" />
                            </a>
                            <a href="/#" className="social-link">
                                <img src={ic_telegram} alt="ic_telegram" />
                            </a>
                            <a href="/#" className="social-link">
                                <img src={ic_youtube} alt="ic_youtube" />
                            </a>
                        </div>

                        <p className="copyright-text">&copy; {new Date().getFullYear()} Clean City</p>
                    </div>
                    <div className="col-lg-6">
                        <img src={undp_logo} alt="undp_logo" height="50" />
                        <div className="social-links">
                            <a href="/#" className="social-link">
                                <img src={ic_facebook} alt="ic_facebook" />
                            </a>
                            <a href="/#" className="social-link">
                                <img src={ic_instagram} alt="ic_instagram" />
                            </a>
                            <a href="/#" className="social-link">
                                <img src={ic_telegram} alt="ic_telegram" />
                            </a>
                            <a href="/#" className="social-link">
                                <img src={ic_youtube} alt="ic_youtube" />
                            </a>
                        </div>

                        <p className="copyright-text">UNDP</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
