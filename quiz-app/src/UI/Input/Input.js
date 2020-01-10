import React from "react";
import './Input.css'

const IsInvalid = ({valid, touched, shouldValidate}) => {
    return !valid && shouldValidate && touched;
};

const Input = (props) =>{
    const inputType = props.inputType || 'text';
    const cls = ['Input'];
    const htmlFor = `${inputType}-${Math.random()}`;
    if (IsInvalid(props))
        cls.push('Invalid');
    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {IsInvalid(props) ? <span>{props.errorMessage}</span> : null}
        </div>
    )
};

export default Input