import React from "react";
import './FinishedQuiz.css'

const FinishedQuiz = props =>{
    return (
        <div className={'FinishedQuiz'}>
        <ul>
            {props.quiz.map((questionItem, index) => {
                const isCorrect = props.results[index] === 'correct';

                return (
                    <li key={index}>
                        <strong>{index+1}</strong>.&nbsp;
                        {questionItem.question}
                        <i className={isCorrect ? 'correctAnswer' : 'wrongAnswer'}>{isCorrect ? 'v' : 'x'}</i>
                    </li>
                )
            })}
        </ul>
    </div>)
};

export default FinishedQuiz