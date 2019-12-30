import React from 'react'
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";
import './Quiz.css'

class Quiz extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currentQuestionNumber: 0,
            quiz: [
                {
                    question: 'Question1',
                    rightAnswerId: 2,
                    answers: [
                        {text: 'answer1', id:1},
                        {text: 'answer2', id:2},
                        {text: 'answer3', id:3},
                        {text: 'answer4', id:4},
                    ]
                },
                {
                    question: 'Question2',
                    rightAnswerId: 3,
                    answers: [
                        {text: 'answer1', id:1},
                        {text: 'answer2', id:2},
                        {text: 'answer3', id:3},
                        {text: 'answer4', id:4},
                    ]
                }
            ]
        }
    }

    onAnswerClick(answerId){
        console.log(answerId);
        this.setState({
            currentQuestionNumber: this.state.currentQuestionNumber+1
        })
    }

    render() {
        return (
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>
                        Quiz
                    </h1>
                    <ActiveQuiz
                        question={this.state.quiz[this.state.currentQuestionNumber].question}
                        answers={this.state.quiz[this.state.currentQuestionNumber].answers}
                        rightAnswerId={this.state.quiz[0].rightAnswerId}
                        onAnswerClick={this.onAnswerClick.bind(this)}
                        questionsCount={this.state.quiz.length}
                        currentQuestionNumber={this.state.currentQuestionNumber+1}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz