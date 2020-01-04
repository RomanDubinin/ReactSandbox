import React from "react";
import './QuizList.css'
import {NavLink} from "react-router-dom";

export default class QuizList extends React.Component{

    renderQuizList(){
        const quizes = [
            {title: 'first', id: '1'},
            {title: 'second', id: '2'},
            {title: 'third', id: '3'}
        ];

        return quizes.map((quiz, index) => {
            return (
                <li key={index}>
                    <NavLink to={'quiz/' + quiz.id}>
                        Quiz {quiz.title}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={'QuizList'}>
                <div>
                    <h1>Quiz List</h1>

                    <ul>
                        {this.renderQuizList()}
                    </ul>
                </div>
            </div>
        );
    }
}
