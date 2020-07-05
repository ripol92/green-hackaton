import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

function Button(props) {

    const { className, onClick, label } = props;

    return (
        <button className={className} onClick={onClick}>{label}</button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired
}

export default Button;