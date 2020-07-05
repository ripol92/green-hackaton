import React from 'react';

import './howItWorksStep.scss';

function HowItWorksStep(props) {
    return (
        <div className="HowItWorksStep">
            <div className="step-content">
                <div className="step">
                    {props.step.step}
                </div>
                {props.hideLine ? <></> : <div className="step-line"></div>}
            </div>

            <div className="step-description-content">
                <h5 className="step-title">{props.step.title}</h5>
                <p className="step-description">{props.step.description}</p>
            </div>
        </div>
    );
}

export default HowItWorksStep;