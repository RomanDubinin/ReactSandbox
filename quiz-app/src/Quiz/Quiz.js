import React from 'react'
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";
import './Quiz.css'

class Quiz extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
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
        if (this.state.currentAnswerState !== null)
            return;

        const question = this.state.quiz[this.state.currentQuestionNumber];
        if (question.rightAnswerId === answerId){

            this.setState({
                currentAnswerState: {[answerId]: {value: true} }
            });

            const timeout = window.setTimeout(() => {
                if (this.quizIsFinished()){
                    console.log("Fisnished");
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
            this.setState({
                currentAnswerState: {[answerId]: {value: false} }
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
                    <ActiveQuiz
                        question={this.state.quiz[this.state.currentQuestionNumber].question}
                        answers={this.state.quiz[this.state.currentQuestionNumber].answers}
                        rightAnswerId={this.state.quiz[this.state.currentQuestionNumber].rightAnswerId}
                        onAnswerClick={this.onAnswerClick.bind(this)}
                        questionsCount={this.state.quiz.length}
                        currentQuestionNumber={this.state.currentQuestionNumber+1}
                        currentAnswerState={this.state.currentAnswerState}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz