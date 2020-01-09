import React from "react";
import './QuizList.css'
import Loader from "../UI/Loader/Loader";
import {NavLink} from "react-router-dom";
import backend from "../Backend/Backend";

export default class QuizList extends React.Component{

    state = {
        quiz: [],
        loading: true
    };

    async componentDidMount() {
        try {

            const response = await backend.get('quizes.json')

            const quiz = [];
            Object.keys(response.data).forEach((key, index) => {
                quiz.push({
                    title: `Test №${index+1}`,
                    id: key
                })
            });

            this.setState({
                quiz,
                loading: false
            })
        }
        catch (e) {
            console.log(e)
        }
    }

    renderQuizList(){
        return this.state.quiz.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'quiz/' + quiz.id}>
                        {quiz.title}
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

                    {this.state.loading
                        ? <Loader/>
                        : <ul>
                            {this.renderQuizList()}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}
