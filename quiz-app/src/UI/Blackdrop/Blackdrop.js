import React from "react";
import './Blackdrop.css'

const Blackdrop = props =>{
    return(
        <div className={'Blackdrop'} onClick={props.onClick}/>
    )
};

export default Blackdrop