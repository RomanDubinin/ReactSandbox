import React from "react";
import './AnswerItem.css'
const AnswerItem = props => {
    const classes = ['AnswerItem'];
    if(props.currentAnswerState){
        classes.push(props.currentAnswerState.value ? 'correct' : 'wrong')
    }

    return <li
        className={classes.join(' ')}
        onClick={() => props.onAnswerClick(props.answer.id)}
    >
        {props.answer.text}
    </li>
};

export default AnswerItem