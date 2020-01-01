import React from 'react'
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../FinishedQuiz/FinishedQuiz";
import './Quiz.css'

class Quiz extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            quizIsFinished: false,
            results: {}, // {[id] : correct or incorrect}
            currentQuestionNumber: 0,
            currentAnswerState: null,
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

    quizIsFinished(){
        return this.state.quiz.length === this.state.currentQuestionNumber+1;
    }

    onAnswerClick(answerId){
        if (this.state.currentAnswerState !== null){
            const key = Object.keys(this.state.currentAnswerState)[0]
            if (this.state.currentAnswerState[key].value === true)
                return;
        }

        const questionId = this.state.currentQuestionNumber;
        const question = this.state.quiz[questionId];
        const results = this.state.results;

        if (question.rightAnswerId === answerId){
            if (!results[questionId]){
                results[questionId] = 'correct';
            }
            this.setState({
                currentAnswerState: {[answerId]: {value: true} },
                results
            });

            const timeout = window.setTimeout(() => {
                if (this.quizIsFinished()){
                    this.setState({
                        quizIsFinished: true
                    });
                }
                else{
                    this.setState({
                        currentQuestionNumber: this.state.currentQuestionNumber+1,
                        currentAnswerState: null
                    })
                }

                window.clearTimeout(timeout);
            }, 1000)
        }
        else{
            results[questionId] = 'incorrect';
            this.setState({
                currentAnswerState: {[answerId]: {value: false} },
                results
            });
        }
    }

    render() {
        return (
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>
                        Quiz
                    </h1>
                    {
                        this.state.quizIsFinished
                        ? <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            />
                        : <ActiveQuiz
                                question={this.state.quiz[this.state.currentQuestionNumber].question}
                                answers={this.state.quiz[this.state.currentQuestionNumber].answers}
                                rightAnswerId={this.state.quiz[this.state.currentQuestionNumber].rightAnswerId}
                                onAnswerClick={this.onAnswerClick.bind(this)}
                                questionsCount={this.state.quiz.length}
                                currentQuestionNumber={this.state.currentQuestionNumber+1}
                                currentAnswerState={this.state.currentAnswerState}
                            />
                    }

                </div>
            </div>
        );
    }
}

export default Quiz