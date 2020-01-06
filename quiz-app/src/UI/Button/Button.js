import React from "react";
import './Button.css'

const Button = props => {
    let buttonClassName = '';
    if (props.buttonType === 'success')
        buttonClassName = 'buttonSuccess';
    if (props.buttonType === 'error')
        buttonClassName = 'buttonError';
    if (props.buttonType === 'primary')
        buttonClassName = 'buttonPrimary';

    return(
        <button
            onClick={props.onClick}
            className={'Button ' + buttonClassName}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
};

export default Button