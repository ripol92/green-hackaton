import React from 'react';

import './customerExperience.scss';

import TitleTemplate from '../../../../shared/components/TitleTemplate/TitleTemplate';
import CustomerExperienceItem from './CustomerExperienceItem/CustomerExperienceItem';

function CustomerExperience(props) {

    const params = {
        title: 'Проблемы, которые мы хотим решить',
        description: 'Some text...'
    }

    const items = props.items && props.items.length > 0 ?
        props.items.map((item, index) =>
            <div className="col-lg-4" key={index}>
                <CustomerExperienceItem item={item} />
            </div>
        ) : <></>

    return (
        <div className="CustomerExperience">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <TitleTemplate params={params} className="customer-experience-title" />
                    </div>
                </div>
                <div className="row">
                    {items}
                </div>
            </div>
        </div>
    );
}

export default CustomerExperience;
