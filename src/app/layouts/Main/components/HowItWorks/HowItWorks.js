import React from 'react';

import './howItWorks.scss';

import TitleTemplate from '../../../../shared/components/TitleTemplate/TitleTemplate';
import HowItWorksStep from './HowItWorksStep/HowItWorksStep';

import ic_play from '../../../../shared/assets/images/ic_play.svg'

function HowItWorks(props) {

    const params = {
        title: 'Как это работает',
        description: ''
    }

    const items = props.params && props.params.length > 0 ?
        props.params.map((item, index) =>
            <div className="col-lg-4" key={index}>
                <HowItWorksStep step={item} hideLine={props.params.length - 1 === index} />
            </div>
        ) : <></>

    return (
        <div className="HowItWorks">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <TitleTemplate params={params} />
                    </div>
                </div>
                <div className="row">
                    {items}
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <button className="watch-tutorial-button">
                            <img src={ic_play} alt="ic_play" />
                            Смотреть видео
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;