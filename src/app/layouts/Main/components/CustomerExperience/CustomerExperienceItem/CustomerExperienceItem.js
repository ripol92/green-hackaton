import React from 'react';

import './customerExperienceItem.scss';

function CustomerExperienceItem(props) {
    return (
        <div className="CustomerExperienceItem">
            <div className="customer-experience-item-image-content">
                <img src={props.item.image} alt="item" />
            </div>

            <div className="customer-experience-item-description-content">
                <h5 className="customer-experience-item-title">{props.item.title}</h5>
                <p className="customer-experience-item-description">{props.item.description}</p>
            </div>
        </div>
    );
}

export default CustomerExperienceItem;