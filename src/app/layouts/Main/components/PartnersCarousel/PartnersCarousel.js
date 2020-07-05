import React from 'react';

import './partnersCarousel.scss';

import Partners from './Partners/Partners';

function PartnersCarousel(props) {
    return (
        <div className="PartnersCarousel">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="partners-text-col">
                            <p className="partners-text">
                                Наши партнёры 
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <Partners partners={props.partners} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartnersCarousel;