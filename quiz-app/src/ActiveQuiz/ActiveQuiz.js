import React from "react";
import AnswersList from './AnswersList/AnswersList'
import './ActiveQuiz.css'

const ActiveQuiz = (props) => (
    <div className={'ActiveQuiz'}>
        <p className={'Question'}>
            <span>
                <strong>{props.currentQuestionNumber}.</strong>&nbsp;
                {props.question}
            </span>

            <small> {props.currentQuestionNumber} z {props.questionsCount}</small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz