import React from 'react';

import './titleTemplate.scss';
import GreenLine from '../GreenLine/GreenLine';

function TitleTemplate(props) {
    return (
        <div className={"TitleTemplate " + props.className}>
            <GreenLine />
            <div className="text-content">
                <h1 className="title">{props.params.title}</h1>
                <p className="description">{props.params.description}</p>
            </div>
        </div>
    );
}

export default TitleTemplate;