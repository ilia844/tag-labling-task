import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const Button = ({
    children, onClick, className, disabled, active, invert
}) => {

    const classes = classNames(
        'btn',
        className,
        { active },
        { invert },
    )

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    invert: PropTypes.bool,
}

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
    invert: false,
}

export default Button;