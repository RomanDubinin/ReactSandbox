import React from "react";
import './FinishedQuiz.css'

const FinishedQuiz = props =>{
    const rightAnswers = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'correct')
            total++;
        return total;
    }, 0);

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

            <p>Right {rightAnswers} from {props.quiz.length}</p>
    </div>)
};

export default FinishedQuiz